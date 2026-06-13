import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Limites de tamanho dos campos ---
const LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
} as const;

// Aceita apenas e-mails de formato válido (e sem quebras de linha, evitando
// header injection no campo replyTo).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --- Rate limiting em memória (por IP) ---
// Janela deslizante simples. Em Fluid Compute as instâncias são reaproveitadas,
// então isso oferece proteção razoável contra abuso/spam. Para garantia forte
// entre instâncias, migrar para um store compartilhado (ex.: Upstash Redis).
const RATE_LIMIT = { windowMs: 60_000, max: 5 };
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  recent.push(now);
  hits.set(ip, recent);

  // Limpeza oportunista para não crescer indefinidamente.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => t <= windowStart)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT.max;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas solicitações. Tente novamente em alguns instantes." },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Requisição inválida." },
        { status: 400 }
      );
    }

    const {
      name: rawName,
      email: rawEmail,
      subject: rawSubject,
      message: rawMessage,
      // Honeypot: campo oculto que humanos não preenchem. Se vier preenchido,
      // é quase certamente um bot — respondemos "sucesso" sem enviar nada.
      website,
    } = (body ?? {}) as Record<string, unknown>;

    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // Normaliza para string e remove espaços nas pontas.
    const name = typeof rawName === "string" ? rawName.trim() : "";
    const email = typeof rawEmail === "string" ? rawEmail.trim() : "";
    const subject = typeof rawSubject === "string" ? rawSubject.trim() : "";
    const message = typeof rawMessage === "string" ? rawMessage.trim() : "";

    // Validação obrigatória.
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    // Validação de formato de e-mail (no servidor, não contornável pelo cliente).
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    // Validação de tamanho.
    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      subject.length > LIMITS.subject ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json(
        { error: "Um ou mais campos excedem o tamanho permitido." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const emailSubject = `[Contato - Portfólio] ${
      subject || `Novo contato de ${name}`
    }`.slice(0, 200);
    const safeSubject = escapeHtml(emailSubject);
    const safeMessage = escapeHtml(message);

    // Custom HTML email matching the dark-mode aesthetic of the portfolio website
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${safeSubject}</title>
          <style>
            body {
              background-color: #050508;
              color: #A8B3CF;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
            }
            .card {
              background-color: #0E0E14;
              border: 1px solid #1C1C2C;
              border-radius: 12px;
              padding: 32px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
            }
            .header {
              display: flex;
              align-items: center;
              border-bottom: 1px solid rgba(255, 255, 255, 0.06);
              padding-bottom: 20px;
              margin-bottom: 24px;
            }
            .logo {
              font-size: 16px;
              font-weight: 700;
              color: #FFFFFF;
              letter-spacing: -0.01em;
            }
            .logo span {
              color: #0980FF;
              font-weight: 300;
              letter-spacing: 0.08em;
            }
            .badge {
              display: inline-block;
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #0980FF;
              background-color: rgba(9, 128, 255, 0.1);
              border: 1px solid rgba(9, 128, 255, 0.3);
              padding: 4px 10px;
              border-radius: 99px;
              margin-bottom: 16px;
            }
            h1 {
              color: #FFFFFF;
              font-size: 22px;
              font-weight: 600;
              margin: 0 0 16px 0;
              line-height: 1.25;
            }
            .field-group {
              margin-bottom: 20px;
            }
            .field-label {
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #5A6480;
              margin-bottom: 6px;
            }
            .field-value {
              font-size: 15px;
              color: #FFFFFF;
            }
            .field-value a {
              color: #0980FF;
              text-decoration: none;
            }
            .message-box {
              background-color: #0B0B12;
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 8px;
              padding: 16px;
              font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
              font-size: 13.5px;
              line-height: 1.6;
              color: #C8D1E8;
              white-space: pre-wrap;
              margin-top: 8px;
              text-align: left;
            }
            .footer {
              text-align: center;
              font-size: 11px;
              color: #5A6480;
              margin-top: 32px;
              line-height: 1.5;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <div class="logo">Eduardo Freyer<span> ·DEV</span></div>
              </div>
              <div class="badge">Formulário de Contato</div>
              <h1>Novo contato recebido</h1>

              <div class="field-group">
                <div class="field-label">Remetente</div>
                <div class="field-value">${safeName}</div>
              </div>

              <div class="field-group">
                <div class="field-label">E-mail</div>
                <div class="field-value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">Assunto</div>
                <div class="field-value">${safeSubject}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Mensagem</div>
                <div class="message-box">${safeMessage}</div>
              </div>
            </div>

            <div class="footer">
              Este e-mail foi gerado automaticamente a partir do formulário de contato do seu Portfólio.<br>
              © ${new Date().getFullYear()} Eduardo Freyer. Todos os direitos reservados.
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: "Contato - Portfólio <onboarding@resend.dev>",
      to: "nettofreyereduardo@gmail.com",
      subject: emailSubject,
      replyTo: email,
      html: htmlContent,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return NextResponse.json(
        { error: "Não foi possível enviar a mensagem. Tente novamente mais tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error: unknown) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor." },
      { status: 500 }
    );
  }
}
