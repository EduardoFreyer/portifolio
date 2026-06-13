"use client";

import React from "react";
import { Icon } from "./Icons";
import { Translation } from "../lib/i18n";

interface AboutProps {
  t: Translation;
}

// Renderiza um texto que pode conter apenas o marcador <b>…</b>, de forma segura:
// cada trecho vira um nó de texto (auto-escapado pelo React), e só os marcadores
// reconhecidos viram <b>. Nenhum HTML arbitrário é interpretado.
function renderWithBold(text: string): React.ReactNode {
  const parts = text.split(/<b>(.*?)<\/b>/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <b key={i}>{part}</b> : <React.Fragment key={i}>{part}</React.Fragment>
  );
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
            <p className="about-lead">{renderWithBold(t.about.lead)}</p>
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
