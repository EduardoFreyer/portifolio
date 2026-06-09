// hero.jsx — three switchable hero directions
const { useState: useS, useEffect: useE, useRef: useR } = React;

/* ---- Code window (used in Variant A) ---- */
function CodeWindow({ t }) {
  const lines = [
    [["tok-key", "const"], ["tok-var", " eduardo"], ["tok-var", ": "], ["tok-fn", "Developer"], ["tok-var", " = {"]],
    [["tok-var", "  name"], ["tok-var", ": "], ["tok-str", '"Eduardo Freyer"'], ["tok-var", ","]],
    [["tok-var", "  role"], ["tok-var", ": "], ["tok-str", '"Full-Stack Dev"'], ["tok-var", ","]],
    [["tok-var", "  stack"], ["tok-var", ": ["]],
    [["tok-str", '    "React"'], ["tok-var", ", "], ["tok-str", '"React Native"'], ["tok-var", ","]],
    [["tok-str", '    "Next.js"'], ["tok-var", ", "], ["tok-str", '"Node"'], ["tok-var", ", "], ["tok-str", '"TypeScript"']],
    [["tok-var", "  ],"]],
    [["tok-var", "  focus"], ["tok-var", ": ["], ["tok-str", '"web"'], ["tok-var", ", "], ["tok-str", '"mobile"'], ["tok-var", "],"]],
    [["tok-var", "  available"], ["tok-var", ": "], ["tok-key", "true"], ["tok-var", ","]],
    [["tok-var", "};"]],
    [["tok-com", ""]],
    [["tok-key", "export"], ["tok-key", " default"], ["tok-var", " eduardo"], ["tok-var", ";"]],
  ];
  const [n, setN] = useS(0);
  useE(() => {
    if (n >= lines.length) return;
    const id = setTimeout(() => setN((v) => v + 1), n === 0 ? 350 : 160);
    return () => clearTimeout(id);
  }, [n]);

  return (
    <div className="code-window">
      <div className="code-bar">
        <span className="d r"></span><span className="d y"></span><span className="d g"></span>
        <span className="file">{t.hero.codeFile}</span>
      </div>
      <div className="code-body">
        {lines.slice(0, n).map((line, i) => (
          <span className="ln" key={i}>
            {line.map((tk, j) => <span key={j} className={tk[0]}>{tk[1]}</span>)}
            {i === n - 1 && n < lines.length && <span className="cursor-blink"></span>}
          </span>
        ))}
        {n >= lines.length && <span className="ln"><span className="cursor-blink"></span></span>}
      </div>
    </div>
  );
}

/* ---- Shared bits ---- */
function HeroStatus({ t }) {
  return <div className="hero-status reveal in"><span className="dot"></span>{t.hero.status}</div>;
}
function HeroStats({ t }) {
  return (
    <div className="hero-stats">
      {t.hero.stats.map((s, i) => (
        <div className="stat" key={i}><div className="n">{s.n}</div><div className="l">{s.l}</div></div>
      ))}
    </div>
  );
}
function HeroCTA({ t }) {
  const go = (e, id) => { e.preventDefault(); const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" }); };
  return (
    <div className="hero-cta">
      <a className="btn btn-primary" href="#projects" onClick={(e) => go(e, "projects")}>{t.hero.ctaPrimary}<Icon name="arrow-right"/></a>
      <a className="btn btn-ghost" href="#contact" onClick={(e) => go(e, "contact")}>{t.hero.ctaGhost}</a>
    </div>
  );
}
function TechMarquee({ words }) {
  const items = ["React", "React Native", "Next.js", "Node.js", "TypeScript", "Express", "PostgreSQL", "Prisma"];
  const all = [...items, ...items];
  return (
    <div className="marquee marquee-wrap">
      <div className="marquee-track">
        {all.map((w, i) => <span className="tech-pill" key={i}><span className="dot"></span>{w}</span>)}
      </div>
    </div>
  );
}

/* ---- Variant A: split + code window ---- */
function HeroA({ t }) {
  return (
    <section className="hero hero-a" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <HeroStatus t={t}/>
            <h1 className="reveal in" style={{ margin: "22px 0 0" }}>
              {t.hero.titleLead} <span className="grad-text">{t.hero.titleHi}</span><br/>{t.hero.titleEnd}
            </h1>
            <p className="hero-sub" style={{ margin: "22px 0 30px" }}>{t.hero.sub}</p>
            <HeroCTA t={t}/>
            <div style={{ marginTop: 44 }}><HeroStats t={t}/></div>
          </div>
          <div className="hero-visual"><CodeWindow t={t}/></div>
        </div>
      </div>
    </section>
  );
}

/* ---- Variant B: centered bold typographic ---- */
function HeroB({ t }) {
  return (
    <section className="hero hero-b" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <HeroStatus t={t}/>
          <h1 className="reveal in">
            {t.hero.titleLead}<br/><span className="grad-text">{t.hero.titleHi}</span><br/>{t.hero.titleEnd}
          </h1>
          <p className="hero-sub">{t.hero.sub}</p>
          <HeroCTA t={t}/>
          <TechMarquee words={t.hero.typeWords}/>
        </div>
      </div>
    </section>
  );
}

/* ---- Variant C: device mockups ---- */
function DeviceMockups() {
  return (
    <div className="devices">
      <div className="device-browser">
        <div className="bar"><span className="d"></span><span className="d"></span><span className="d"></span><span className="url"></span></div>
        <div className="screen">
          <div className="mini-row"><span className="mini-chip" style={{ width: 64 }}></span><span className="mini-bar" style={{ width: 90, marginLeft: "auto" }}></span></div>
          <div className="mini-bar mini-accent" style={{ width: "62%", height: 14, marginBottom: 14 }}></div>
          <div className="pv-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <div className="mini-card"><div className="mini-bar" style={{ width: "70%" }}></div><div className="mini-bar" style={{ width: "45%", marginTop: 7 }}></div></div>
            <div className="mini-card"><div className="mini-bar mini-accent" style={{ width: "60%" }}></div><div className="mini-bar" style={{ width: "50%", marginTop: 7 }}></div></div>
            <div className="mini-card"><div className="mini-bar" style={{ width: "55%" }}></div><div className="mini-bar" style={{ width: "65%", marginTop: 7 }}></div></div>
          </div>
        </div>
      </div>
      <div className="device-phone">
        <span className="notch"></span>
        <div className="screen">
          <div className="mini-row" style={{ marginTop: 6 }}><span className="mini-bar" style={{ width: 50 }}></span><span className="mini-chip" style={{ width: 22, marginLeft: "auto" }}></span></div>
          <div className="mini-card" style={{ marginTop: 10 }}><div className="mini-bar mini-accent" style={{ width: "70%" }}></div><div className="mini-bar" style={{ width: "90%", marginTop: 8 }}></div><div className="mini-bar" style={{ width: "60%", marginTop: 6 }}></div></div>
          <div className="mini-card" style={{ marginTop: 10 }}><div className="mini-bar" style={{ width: "55%" }}></div><div className="mini-bar" style={{ width: "80%", marginTop: 8 }}></div></div>
        </div>
      </div>
    </div>
  );
}
function HeroC({ t }) {
  return (
    <section className="hero hero-c" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <HeroStatus t={t}/>
            <h1 className="reveal in" style={{ margin: "22px 0 0" }}>
              {t.hero.titleLead} <span className="grad-text">{t.hero.titleHi}</span> {t.hero.titleEnd}
            </h1>
            <p className="hero-sub" style={{ margin: "22px 0 30px" }}>{t.hero.sub}</p>
            <HeroCTA t={t}/>
            <div style={{ marginTop: 44 }}><HeroStats t={t}/></div>
          </div>
          <DeviceMockups/>
        </div>
      </div>
    </section>
  );
}

function Hero({ variant, t }) {
  if (variant === "B") return <HeroB t={t}/>;
  if (variant === "C") return <HeroC t={t}/>;
  return <HeroA t={t}/>;
}

window.Hero = Hero;
