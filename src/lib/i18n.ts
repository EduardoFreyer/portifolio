// i18n.ts — PT/EN content for Eduardo Freyer portfolio

export interface Translation {
  nav: {
    about: string;
    stack: string;
    projects: string;
    contact: string;
    cta: string;
  };
  hero: {
    status: string;
    role: string;
    titleLead: string;
    titleHi: string;
    titleEnd: string;
    sub: string;
    ctaPrimary: string;
    ctaGhost: string;
    stats: Array<{ n: string; l: string }>;
    codeFile: string;
    typeWords: string[];
  };
  tech: {
    eyebrow: string;
    title: string;
    sub: string;
    cards: Array<{ name: string; role: string; desc: string }>;
    extraLabel: string;
    extra: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    sub: string;
    view: string;
    items: Array<{
      title: string;
      desc: string;
      tags: string[];
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    focusK: string;
    focus: Array<{ i: string; t: string; d: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    copy: string;
    copied: string;
    form: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      subject: string;
      subjectPh: string;
      message: string;
      messagePh: string;
      send: string;
      errRequired: string;
      errEmail: string;
      or: string;
      successTitle: string;
      successMsg: string;
      successReset: string;
    };
  };
  footer: {
    built: string;
    top: string;
  };
}

export const I18N: Record<string, Translation> = {
  pt: {
    nav: { about: "Sobre", stack: "Stack", projects: "Projetos", contact: "Contato", cta: "Vamos conversar" },
    hero: {
      status: "Disponível para novos projetos",
      role: "Desenvolvedor Full-Stack",
      titleLead: "Construo aplicações",
      titleHi: "web e mobile",
      titleEnd: "do front ao back.",
      sub: "Especializado no ecossistema JavaScript / TypeScript. Transformo ideias em plataformas completas — interfaces intuitivas no front-end e back-ends seguros e otimizados.",
      ctaPrimary: "Ver Projetos",
      ctaGhost: "Entrar em Contato",
      stats: [
        { n: "5+", l: "Tecnologias principais" },
        { n: "3", l: "Sistemas entregues" },
        { n: "100%", l: "TypeScript-first" }
      ],
      codeFile: "developer.ts",
      typeWords: ["web", "mobile", "completas", "escaláveis"]
    },
    tech: {
      eyebrow: "Stack Principal",
      title: "Ferramentas que domino",
      sub: "Um conjunto coeso de tecnologias para entregar do protótipo à produção, em web e mobile.",
      cards: [
        { name: "React", role: "Front-end Web", desc: "Interfaces componentizadas, performáticas e reativas para a web." },
        { name: "React Native", role: "Mobile", desc: "Apps nativos para iOS e Android com uma única base de código." },
        { name: "Next.js", role: "Full-stack Web", desc: "SSR, rotas e APIs com renderização rápida e ótimo SEO." },
        { name: "Node.js", role: "Back-end", desc: "APIs robustas, autenticação e integrações no servidor." },
        { name: "TypeScript", role: "Linguagem", desc: "Tipagem estática para um código limpo, seguro e escalável." }
      ],
      extraLabel: "Também trabalho com",
      extra: ["Express", "MySQL", "Prisma", "REST APIs", "JWT / Auth", "Git", "Tailwind"]
    },
    projects: {
      eyebrow: "Trabalhos",
      title: "Projetos selecionados",
      sub: "Sistemas reais de gestão e simulação, com controle de acesso e regras de negócio complexas.",
      view: "Ver detalhes",
      items: [
        {
          title: "Sistema de Marcação de Atendimentos",
          desc: "Plataforma para uma instituição de ensino onde os alunos visualizam em qual dia e quais pacientes irão atender. Organiza a agenda clínica de forma clara e sem sobreposição.",
          tags: ["Next.js", "Node.js", "TypeScript", "Gestão"]
        },
        {
          title: "Sistema de Grade Horária",
          desc: "Ferramenta para coordenadores cadastrarem disciplinas e professores e vincularem aulas — com validação automática que impede conflitos de horário entre turmas.",
          tags: ["Next.js", "Node.js", "MySQL", "Lógica complexa"]
        },
        {
          title: "Simulador de Processo Jurídico",
          desc: "Sistema acadêmico que simula todo o fluxo de um processo jurídico, inspirado em plataformas como PROJUDI e PJE, permitindo que o professor avalie o desempenho do aluno.",
          tags: ["Django", "Workflow", "Acadêmico"]
        }
      ]
    },
    about: {
      eyebrow: "Sobre",
      title: "Código limpo, arquitetura sólida",
      lead: "Desenvolvedor full-stack especializado no ecossistema <b>JavaScript / TypeScript</b>, da arquitetura à entrega.",
      p1: "Tenho vivência na arquitetura e construção de plataformas completas, desde sistemas complexos de gestão com controle de acesso rigoroso até ferramentas inovadoras voltadas para o usuário.",
      p2: "Meu objetivo é sempre entregar um código limpo e arquiteturas sólidas, garantindo a integração perfeita entre um front-end intuitivo e um back-end seguro e otimizado.",
      focusK: "Foco",
      focus: [
        { i: "smartphone", t: "Aplicações mobile", d: "iOS e Android com React Native" },
        { i: "globe", t: "Aplicações web", d: "SPAs e apps full-stack com Next.js" },
        { i: "shield", t: "Acesso & segurança", d: "Autenticação e controle de permissões" },
        { i: "git", t: "Código escalável", d: "TypeScript-first, manutenível" }
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo juntos",
      sub: "Aberto a novos projetos e oportunidades. Preencha o formulário ou me chame direto.",
      copy: "Copiar",
      copied: "Copiado!",
      form: {
        name: "Nome", namePh: "Seu nome",
        email: "E-mail", emailPh: "voce@email.com",
        subject: "Assunto", subjectPh: "Sobre o que quer falar?",
        message: "Mensagem", messagePh: "Conte um pouco sobre o projeto ou a oportunidade...",
        send: "Enviar Mensagem",
        errRequired: "Campo obrigatório",
        errEmail: "E-mail inválido",
        or: "ou me encontre em",
        successTitle: "Tudo pronto!",
        successMsg: "Seu cliente de e-mail vai abrir com a mensagem preenchida. É só revisar e enviar.",
        successReset: "Enviar outra mensagem"
      }
    },
    footer: { built: "Desenvolvido com TypeScript & cafeína por", top: "Voltar ao topo" }
  },

  en: {
    nav: { about: "About", stack: "Stack", projects: "Projects", contact: "Contact", cta: "Let's talk" },
    hero: {
      status: "Available for new projects",
      role: "Full-Stack Developer",
      titleLead: "I build",
      titleHi: "web & mobile",
      titleEnd: "apps, front to back.",
      sub: "Specialized in the JavaScript / TypeScript ecosystem. I turn ideas into complete platforms — intuitive front-ends and secure, optimized back-ends.",
      ctaPrimary: "View Projects",
      ctaGhost: "Get in Touch",
      stats: [
        { n: "5+", l: "Core technologies" },
        { n: "3", l: "Systems shipped" },
        { n: "100%", l: "TypeScript-first" }
      ],
      codeFile: "developer.ts",
      typeWords: ["web", "mobile", "complete", "scalable"]
    },
    tech: {
      eyebrow: "Core Stack",
      title: "Tools I master",
      sub: "A cohesive set of technologies to ship from prototype to production, across web and mobile.",
      cards: [
        { name: "React", role: "Web Front-end", desc: "Componentized, performant and reactive interfaces for the web." },
        { name: "React Native", role: "Mobile", desc: "Native iOS and Android apps from a single codebase." },
        { name: "Next.js", role: "Full-stack Web", desc: "SSR, routing and APIs with fast rendering and great SEO." },
        { name: "Node.js", role: "Back-end", desc: "Robust APIs, authentication and server-side integrations." },
        { name: "TypeScript", role: "Language", desc: "Static typing for clean, safe and scalable code." }
      ],
      extraLabel: "I also work with",
      extra: ["Express", "MySQL", "Prisma", "REST APIs", "JWT / Auth", "Git", "Tailwind"]
    },
    projects: {
      eyebrow: "Work",
      title: "Selected projects",
      sub: "Real management and simulation systems, with access control and complex business rules.",
      view: "View details",
      items: [
        {
          title: "Appointment Scheduling System",
          desc: "Platform for an academic institution where students see which day and which patients they will attend. Organizes the clinical schedule clearly and without overlaps.",
          tags: ["Next.js", "Node.js", "TypeScript", "Management"]
        },
        {
          title: "Class Timetable System",
          desc: "Tool for coordinators to register subjects and professors and link classes — with automatic validation that prevents schedule conflicts across groups.",
          tags: ["Next.js", "Node.js", "MySQL", "Complex logic"]
        },
        {
          title: "Legal Process Simulator",
          desc: "Academic system that simulates the full flow of a legal process, inspired by platforms like PROJUDI and PJE, letting professors evaluate student performance.",
          tags: ["Django", "Workflow", "Academic"]
        }
      ]
    },
    about: {
      eyebrow: "About",
      title: "Clean code, solid architecture",
      lead: "Full-stack developer specialized in the <b>JavaScript / TypeScript</b> ecosystem, from architecture to delivery.",
      p1: "I have experience architecting and building complete platforms — from complex management systems with strict access control to innovative user-facing tools.",
      p2: "My goal is always to deliver clean code and solid architectures, ensuring a seamless integration between an intuitive front-end and a secure, optimized back-end.",
      focusK: "Focus",
      focus: [
        { i: "smartphone", t: "Mobile apps", d: "iOS & Android with React Native" },
        { i: "globe", t: "Web apps", d: "SPAs and full-stack apps with Next.js" },
        { i: "shield", t: "Access & security", d: "Authentication and permission control" },
        { i: "git", t: "Scalable code", d: "TypeScript-first, maintainable" }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something together",
      sub: "Open to new projects and opportunities. Fill in the form or reach me directly.",
      copy: "Copy",
      copied: "Copied!",
      form: {
        name: "Name", namePh: "Your name",
        email: "Email", emailPh: "you@email.com",
        subject: "Subject", subjectPh: "What do you want to talk about?",
        message: "Message", messagePh: "Tell me a bit about the project or opportunity...",
        send: "Send Message",
        errRequired: "Required field",
        errEmail: "Invalid email",
        or: "or find me on",
        successTitle: "All set!",
        successMsg: "Your email client will open with the message pre-filled. Just review and send.",
        successReset: "Send another message"
      }
    },
    footer: { built: "Built with TypeScript & caffeine by", top: "Back to top" }
  }
};
