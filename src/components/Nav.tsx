"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";
import { Translation } from "../lib/i18n";
import Image from "next/image";

interface NavProps {
	t: Translation;
	theme: string;
	setTheme: (theme: string) => void;
	lang: string;
	setLang: (lang: string) => void;
	scrolled: boolean;
}

export default function Nav({
	t,
	theme,
	setTheme,
	lang,
	setLang,
	scrolled,
}: NavProps) {
	const [open, setOpen] = useState(false);
	const links = [
		{ id: "about", n: "01", label: t.nav.about },
		{ id: "stack", n: "02", label: t.nav.stack },
		{ id: "projects", n: "03", label: t.nav.projects },
		{ id: "contact", n: "04", label: t.nav.contact },
	];

	const go = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		setOpen(false);
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
		}
	};

	return (
		<nav className={"nav" + (scrolled ? " scrolled" : "")}>
			<div className='wrap'>
				<div className='brand' onClick={(e) => go(e, "top")}>
					<span>
						<Image
							src='/logo.svg'
							alt='Logo Eduardo Freyer'
							width={28}
							height={28}
						/>
					</span>
					<span className='name text-nowrap'>Eduardo Freyer</span>
				</div>

				<div className='nav-links'>
					{links.map((l) => (
						<a key={l.id} href={"#" + l.id} onClick={(e) => go(e, l.id)}>
							<span className='num'>{l.n}</span>
							{l.label}
						</a>
					))}
				</div>

				<div className='nav-actions'>
					<div className='lang-toggle' role='group' aria-label='Language'>
						<button
							className={lang === "pt" ? "active" : ""}
							onClick={() => setLang("pt")}
						>
							PT
						</button>
						<button
							className={lang === "en" ? "active" : ""}
							onClick={() => setLang("en")}
						>
							EN
						</button>
					</div>
					<button
						className='icon-btn theme-toggle'
						aria-label='Toggle theme'
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						<span className='moon'>
							<Icon name='moon' />
						</span>
						<span className='sun'>
							<Icon name='sun' />
						</span>
					</button>
					<a
						className='btn btn-primary btn-sm hide-mobile'
						href='#contact'
						onClick={(e) => go(e, "contact")}
					>
						{t.nav.cta}
					</a>
					<button
						className='icon-btn menu-btn'
						aria-label='Menu'
						onClick={() => setOpen(!open)}
					>
						<Icon name={open ? "close" : "menu"} />
					</button>
				</div>
			</div>

			{open && (
				<div className='mobile-menu'>
					{links.map((l) => (
						<a key={l.id} href={"#" + l.id} onClick={(e) => go(e, l.id)}>
							<span className='num'>{l.n}</span>
							{l.label}
						</a>
					))}
					<a
						className='btn btn-primary'
						href='#contact'
						onClick={(e) => go(e, "contact")}
					>
						{t.nav.cta}
					</a>
				</div>
			)}
		</nav>
	);
}
