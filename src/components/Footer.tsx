"use client";

import React from "react";
import { Icon } from "./Icons";
import { Translation } from "../lib/i18n";

interface FooterProps {
  t: Translation;
}

export default function Footer({ t }: FooterProps) {
  const year = new Date().getFullYear();
  const top = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="copy">
          {t.footer.built} <b>Eduardo Freyer</b> · © {year}
        </div>
        <a className="up" href="#top" onClick={top}>
          {t.footer.top}
          <Icon name="arrow-up" size={15} />
        </a>
      </div>
    </footer>
  );
}
