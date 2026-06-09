import React from "react";

interface IconProps {
  name: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({ name, size = 18, style, className }: IconProps) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    ...S,
    style,
    className,
  };

  switch (name) {
    case "sun":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "moon":
      return (
        <svg {...p}>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...p}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case "close":
      return (
        <svg {...p}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      );
    case "arrow-ur":
      return (
        <svg {...p}>
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...p}>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg {...p}>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...p}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    case "mail":
      return (
        <svg {...p}>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="m3 6 9 6 9-6" />
        </svg>
      );
    case "copy":
      return (
        <svg {...p}>
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...p}>
          <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "user":
      return (
        <svg {...p}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
        </svg>
      );
    case "globe":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9.5" />
          <path d="M2.5 12h19M12 2.5c2.6 2.7 4 6 4 9.5s-1.4 6.8-4 9.5c-2.6-2.7-4-6-4-9.5s1.4-6.8 4-9.5z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 7.8 7.5 9.5 4.3-1.7 7.5-4.9 7.5-9.5v-6L12 2.5z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "git":
      return (
        <svg {...p}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="9" r="2.5" />
          <path d="M6 8.5v7M18 11.5c0 4-5 2.5-5 6.5" />
        </svg>
      );
    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
          <path d="M12 1.5A10.5 10.5 0 0 0 1.5 12a10.5 10.5 0 0 0 7.18 9.96c.53.1.72-.23.72-.5v-1.8c-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.08-.64.08-.64 1.05.07 1.6 1.08 1.6 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.66-1.4-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.4-2.08 1.08-2.82-.1-.27-.47-1.34.1-2.78 0 0 .88-.28 2.88 1.07a10 10 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.58 1.44.21 2.51.1 2.78.68.74 1.08 1.67 1.08 2.82 0 4.04-2.46 4.93-4.8 5.19.38.33.71.97.71 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 22.5 12 10.5 10.5 0 0 0 12 1.5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.3H10V9.7h2.5v1.2h.04c.35-.66 1.2-1.36 2.48-1.36 2.65 0 3.14 1.74 3.14 4v4.76z" />
        </svg>
      );
    case "terminal":
      return (
        <svg {...p}>
          <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
          <path d="m7 9 3 3-3 3M13 15h4" />
        </svg>
      );
    case "layers":
      return (
        <svg {...p}>
          <path d="m12 3 9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />
        </svg>
      );
    case "zap":
      return (
        <svg {...p}>
          <path d="M13 2 4.5 13.5H11l-1 8.5L18.5 10.5H12l1-8.5z" />
        </svg>
      );
    default:
      return null;
  }
}

interface TechGlyphProps {
  name: string;
  size?: number;
}

export function TechGlyph({ name, size = 28 }: TechGlyphProps) {
  const c = "var(--primary)";
  switch (name) {
    case "React":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2" fill={c} />
          <g stroke={c} strokeWidth="1.2" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "React Native":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" stroke={c} strokeWidth="1.3" />
          <circle cx="12" cy="12" r="1.4" fill={c} />
          <g stroke={c} strokeWidth="0.9" fill="none">
            <ellipse cx="12" cy="12" rx="4.6" ry="2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="4.6" ry="2" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.5" stroke={c} strokeWidth="1.3" />
          <path d="M8.5 8v8M8.5 8l8 9.2M15.5 8v6" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "Node.js":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7L12 2.2z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M9.5 9v4.2c0 .9-.6 1.4-1.5 1.4s-1.5-.5-1.5-1.3M13 14.4c.4.4 1.1.7 2 .7 1.2 0 2-.5 2-1.4 0-1-.8-1.3-2-1.6-1.1-.3-1.9-.6-1.9-1.5 0-.8.8-1.3 1.8-1.3.9 0 1.5.3 1.9.7" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke={c} strokeWidth="1.3" />
          <path d="M8 12.2h5M10.5 12.2V18" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M18.5 12.6c-.4-.4-1-.6-1.7-.6-1 0-1.7.5-1.7 1.3 0 1.8 3 1 3 2.7 0 .8-.7 1.3-1.8 1.3-.8 0-1.4-.3-1.8-.7" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
