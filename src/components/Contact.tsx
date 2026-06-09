"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { Translation } from "../lib/i18n";

interface ContactProps {
  t: Translation;
  lang: string;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}

export default function Contact({ t, lang }: ContactProps) {
  const email = "nettofreyereduardo@gmail.com";
  const f = t.contact.form;

  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errs, setErrs] = useState<FormErrors>({});

  const copy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const handleChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [k]: e.target.value }));
    if (k !== "subject" && errs[k]) {
      setErrs((p) => ({ ...p, [k]: null }));
    }
  };

  const validate = (): FormErrors => {
    const errors: FormErrors = {};
    if (!form.name.trim()) errors.name = f.errRequired;
    if (!form.email.trim()) {
      errors.email = f.errRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = f.errEmail;
    }
    if (!form.message.trim()) errors.message = f.errRequired;
    return errors;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(
          resData.error ||
            (lang === "pt"
              ? "Algo deu errado. Por favor, tente novamente."
              : "Something went wrong. Please try again.")
        );
      }

      setSent(true);
    } catch (err: any) {
      setSubmitError(
        err.message ||
          (lang === "pt"
            ? "Erro de conexão. Por favor, verifique sua rede."
            : "Connection error. Please check your network.")
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrs({});
    setSubmitError(null);
  };

  return (
    <section className="section-pad contact" id="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            {t.contact.eyebrow}
          </span>
          <h2 style={{ marginTop: 14 }}>{t.contact.title}</h2>
          <p>{t.contact.sub}</p>

          {sent ? (
            <div className="cf-success">
              <span className="ring">
                <Icon name="check" size={34} />
              </span>
              <h3>{f.successTitle}</h3>
              <p>{f.successMsg}</p>
              <span className="reset" onClick={reset}>
                {f.successReset}
              </span>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="cf-name">
                    <Icon name="user" size={14} />
                    {f.name}
                  </label>
                  <input
                    id="cf-name"
                    className={"cf-input" + (errs.name ? " cf-err" : "")}
                    type="text"
                    placeholder={f.namePh}
                    value={form.name}
                    onChange={handleChange("name")}
                  />
                  <span className="cf-hint">
                    {errs.name && (
                      <React.Fragment>
                        <Icon name="close" size={13} />
                        {errs.name}
                      </React.Fragment>
                    )}
                  </span>
                </div>
                <div className="cf-field">
                  <label htmlFor="cf-email">
                    <Icon name="mail" size={14} />
                    {f.email}
                  </label>
                  <input
                    id="cf-email"
                    className={"cf-input" + (errs.email ? " cf-err" : "")}
                    type="email"
                    placeholder={f.emailPh}
                    value={form.email}
                    onChange={handleChange("email")}
                  />
                  <span className="cf-hint">
                    {errs.email && (
                      <React.Fragment>
                        <Icon name="close" size={13} />
                        {errs.email}
                      </React.Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="cf-field">
                <label htmlFor="cf-subject">{f.subject}</label>
                <input
                  id="cf-subject"
                  className="cf-input"
                  type="text"
                  placeholder={f.subjectPh}
                  value={form.subject}
                  onChange={handleChange("subject")}
                />
              </div>
              <div className="cf-field">
                <label htmlFor="cf-message">{f.message}</label>
                <textarea
                  id="cf-message"
                  className={"cf-input" + (errs.message ? " cf-err" : "")}
                  placeholder={f.messagePh}
                  value={form.message}
                  onChange={handleChange("message")}
                ></textarea>
                <span className="cf-hint">
                  {errs.message && (
                    <React.Fragment>
                      <Icon name="close" size={13} />
                      {errs.message}
                    </React.Fragment>
                  )}
                </span>
              </div>
              {submitError && (
                <div style={{ color: "#FF3B5C", fontSize: "14px", marginTop: "-4px", marginBottom: "8px", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Icon name="close" size={14} />
                  {submitError}
                </div>
              )}
              <button className="btn btn-primary cf-submit" type="submit" disabled={loading}>
                {loading ? (lang === "pt" ? "Enviando..." : "Sending...") : f.send}
                <Icon name={loading ? "zap" : "arrow-right"} className={loading ? "animate-pulse" : ""} />
              </button>
            </form>
          )}

          <div className="cf-divider">
            <span>{f.or}</span>
          </div>
          <div className="contact-socials">
            <a className="social-btn" href="https://github.com/EduardoFreyer" target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
              GitHub
            </a>
            <a
              className="social-btn"
              href="https://www.linkedin.com/in/eduardo-freyer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
