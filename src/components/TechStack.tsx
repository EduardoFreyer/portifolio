"use client";

import React from "react";
import { TechGlyph } from "./Icons";
import { Translation } from "../lib/i18n";

interface TechStackProps {
  t: Translation;
}

export default function TechStack({ t }: TechStackProps) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
    e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
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
              <div className="glyph">
                <TechGlyph name={c.name} />
              </div>
              <h3>{c.name}</h3>
              <div className="role">{c.role}</div>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 36 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: "inline-flex" }}>
            {t.tech.extraLabel}
          </span>
          <div className="tech-extra">
            {t.tech.extra.map((x) => (
              <span className="tag" key={x}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
