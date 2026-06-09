"use client";

import React from "react";
import { Icon } from "./Icons";
import { Translation } from "../lib/i18n";

interface AboutProps {
  t: Translation;
}

export default function About({ t }: AboutProps) {
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
                  <Icon name={f.i} size={18} />
                  <span>
                    <b>{f.t}</b> — {f.d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
