// sections.jsx — Tech, Projects, About, Contact, Footer
const { useState: useSS, useRef: useRR } = React;

/* ============ TECH STACK ============ */
function TechStack({ t }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
  };
  return (
    <section className="section-pad" id="stack">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t.tech.eyebrow}</span>
          <h2>{t.tech.title}</h2>
          <p>{t.tech.sub}</p>
        </div>
        <div className="tech-grid">
          {t.tech.cards.map((c, i) => (
            <div className={"tech-card reveal d" + (i % 4)} key={c.name} onMouseMove={onMove}>
              <div className="glyph"><TechGlyph name={c.name}/></div>
              <h3>{c.name}</h3>
              <div className="role">{c.role}</div>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 36 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: "inline-flex" }}>{t.tech.extraLabel}</span>
          <div className="tech-extra">
            {t.tech.extra.map((x) => <span className="tag" key={x}>{x}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ PROJECTS ============ */
function ProjVisual({ idx }) {
  const hot = [[0, 4, 8], [1, 3, 5], [2, 4, 6]][idx % 3];
  return (
    <div className="proj-visual">
      <div className="pv-inner">
        <div className="pv-head">
          <span className="pv-dot"></span>
          <span className="pv-line" style={{ width: 90 }}></span>
          <span className="pv-line" style={{ width: 40, marginLeft: "auto", opacity: 0.5 }}></span>
        </div>
        <div className="pv-line" style={{ width: "55%", height: 11 }}></div>
        <div className="pv-line" style={{ width: "78%", opacity: 0.6 }}></div>
        <div className="pv-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div className={"pv-cell" + (hot.includes(i) ? " hot" : "")} key={i}></div>
          ))}
        </div>
        <div className="pv-line" style={{ width: "40%", opacity: 0.4, marginTop: 2 }}></div>
      </div>
    </div>
  );
}

function Projects({ t }) {
  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.sub}</p>
        </div>
        <div className="proj-list">
          {t.projects.items.map((p, i) => (
            <article className="proj-card reveal" key={i}>
              <div className="proj-body">
                <div className="proj-idx">{String(i + 1).padStart(2, "0")} / {String(t.projects.items.length).padStart(2, "0")}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-tags">{p.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>
                <a className="proj-link" href="#contact" onClick={(e) => { e.preventDefault(); const el = document.getElementById("contact"); if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" }); }}>
                  {t.projects.view}<Icon name="arrow-ur" size={15}/>
                </a>
              </div>
              <ProjVisual idx={i}/>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
function About({ t }) {
  return (
    <section className="section-pad" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2>{t.about.title}</h2>
        </div>
        <div className="about-grid">
          <div className="reveal">
            <p className="about-lead" dangerouslySetInnerHTML={{ __html: t.about.lead }}></p>
            <div className="about-body">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
          <div className="about-side reveal d2">
            <div className="about-card">
              <div className="k">{t.about.focusK}</div>
              {t.about.focus.map((f, i) => (
                <div className="row" key={i}>
                  <Icon name={f.i} size={18}/>
                  <span><b>{f.t}</b> — {f.d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
function Contact({ t }) {
  const email = "nettofreyereduardo@gmail.com";
  const f = t.contact.form;
  const [copied, setCopied] = useSS(false);
  const [sent, setSent] = useSS(false);
  const [form, setForm] = useSS({ name: "", email: "", subject: "", message: "" });
  const [errs, setErrs] = useSS({});

  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(email);
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };
  const set = (k) => (e) => {
    setForm((p) => ({ ...p, [k]: e.target.value }));
    if (errs[k]) setErrs((p) => ({ ...p, [k]: null }));
  };
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = f.errRequired;
    if (!form.email.trim()) e.email = f.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = f.errEmail;
    if (!form.message.trim()) e.message = f.errRequired;
    return e;
  };
  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length) return;
    const subject = encodeURIComponent(form.subject.trim() || `Contato de ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const reset = () => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); setErrs({}); };

  return (
    <section className="section-pad contact" id="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>{t.contact.eyebrow}</span>
          <h2 style={{ marginTop: 14 }}>{t.contact.title}</h2>
          <p>{t.contact.sub}</p>

          {sent ? (
            <div className="cf-success">
              <span className="ring"><Icon name="check" size={34}/></span>
              <h3>{f.successTitle}</h3>
              <p>{f.successMsg}</p>
              <span className="reset" onClick={reset}>{f.successReset}</span>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="cf-name"><Icon name="user" size={14}/>{f.name}</label>
                  <input id="cf-name" className={"cf-input" + (errs.name ? " cf-err" : "")} type="text"
                    placeholder={f.namePh} value={form.name} onChange={set("name")}/>
                  <span className="cf-hint">{errs.name && <React.Fragment><Icon name="close" size={13}/>{errs.name}</React.Fragment>}</span>
                </div>
                <div className="cf-field">
                  <label htmlFor="cf-email"><Icon name="mail" size={14}/>{f.email}</label>
                  <input id="cf-email" className={"cf-input" + (errs.email ? " cf-err" : "")} type="email"
                    placeholder={f.emailPh} value={form.email} onChange={set("email")}/>
                  <span className="cf-hint">{errs.email && <React.Fragment><Icon name="close" size={13}/>{errs.email}</React.Fragment>}</span>
                </div>
              </div>
              <div className="cf-field">
                <label htmlFor="cf-subject">{f.subject}</label>
                <input id="cf-subject" className="cf-input" type="text"
                  placeholder={f.subjectPh} value={form.subject} onChange={set("subject")}/>
              </div>
              <div className="cf-field">
                <label htmlFor="cf-message">{f.message}</label>
                <textarea id="cf-message" className={"cf-input" + (errs.message ? " cf-err" : "")}
                  placeholder={f.messagePh} value={form.message} onChange={set("message")}></textarea>
                <span className="cf-hint">{errs.message && <React.Fragment><Icon name="close" size={13}/>{errs.message}</React.Fragment>}</span>
              </div>
              <button className="btn btn-primary cf-submit" type="submit">{f.send}<Icon name="arrow-right"/></button>
            </form>
          )}

          <div className="cf-divider"><span>{f.or}</span></div>
          <div className="contact-socials">
            <a className="social-btn" href="https://github.com/EduardoFreyer" target="_blank" rel="noopener"><Icon name="github"/>GitHub</a>
            <a className="social-btn" href="https://www.linkedin.com/in/eduardo-netto-freyer-046ab9328/" target="_blank" rel="noopener"><Icon name="linkedin"/>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer({ t }) {
  const year = new Date().getFullYear();
  const top = (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="copy">{t.footer.built} <b>Eduardo Freyer</b> · © {year}</div>
        <a className="up" href="#top" onClick={top}>{t.footer.top}<Icon name="arrow-up" size={15}/></a>
      </div>
    </footer>
  );
}

Object.assign(window, { TechStack, Projects, About, Contact, Footer });
