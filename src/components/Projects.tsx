"use client";

import React from "react";
import { Icon } from "./Icons";
import { Translation } from "../lib/i18n";

interface ProjectsProps {
  t: Translation;
}

function ProjVisual({ idx }: { idx: number }) {
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

export default function Projects({ t }: ProjectsProps) {
  const goContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
    }
  };

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
                <div className="proj-idx">
                  {String(i + 1).padStart(2, "0")} / {String(t.projects.items.length).padStart(2, "0")}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((tg) => (
                    <span key={tg}>{tg}</span>
                  ))}
                </div>
                <a className="proj-link" href="#contact" onClick={goContact}>
                  {t.projects.view}
                  <Icon name="arrow-ur" size={15} />
                </a>
              </div>
              <ProjVisual idx={i} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
