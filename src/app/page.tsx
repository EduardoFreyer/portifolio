"use client";

import React, { useState, useEffect } from "react";
import { I18N, Translation } from "../lib/i18n";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("pt");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Default tweaks (floating panel omitted per user request)
  const heroLayout = "code"; // "code" maps to Variant A
  const showGrid = true;
  const motion = true;

  // Hydration sync
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("ef-theme");
    const savedLang = localStorage.getItem("ef-lang");
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLang(savedLang);
  }, []);

  // Theme update
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ef-theme", theme);
  }, [theme, mounted]);

  // Language update
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("ef-lang", lang);
  }, [lang, mounted]);

  // Accent and styling defaults
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-grid", showGrid ? "on" : "off");
    document.documentElement.setAttribute("data-motion", motion ? "on" : "off");
  }, [showGrid, motion, mounted]);

  // Scroll handler for navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal Intersection Observer
  useEffect(() => {
    if (!mounted) return;
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!motion) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [lang, mounted, motion]);

  // Fallback translation object for SSR to avoid rendering crash before mount
  const content: Translation = I18N[lang] || I18N.pt;

  return (
    <React.Fragment>
      {/* Background visual effects */}
      <div className="bg-fx">
        <div className="glow"></div>
        <div className="grid"></div>
        <div className="orb a"></div>
        <div className="orb b"></div>
      </div>

      <Nav
        t={content}
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        scrolled={scrolled}
      />

      <main>
        {/* heroLayout defaults to A ("code") */}
        <Hero variant="A" t={content} />
        <TechStack t={content} />
        <Projects t={content} />
        <About t={content} />
        <Contact t={content} lang={lang} />
      </main>

      <Footer t={content} />
    </React.Fragment>
  );
}
