export type IconProps = {
  className?: string;
};

export function IconSun({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3" />
      <path d="M12 18.5v3" />
      <path d="M4.2 4.2l2.1 2.1" />
      <path d="M17.7 17.7l2.1 2.1" />
      <path d="M2.5 12h3" />
      <path d="M18.5 12h3" />
      <path d="M4.2 19.8l2.1-2.1" />
      <path d="M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

export function IconMoon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 14.6A8.5 8.5 0 0 1 9.4 3a7 7 0 1 0 11.6 11.6z" />
    </svg>
  );
}

export function IconHTML({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3z"
        fill="currentColor"
        opacity="0.15"
      />
      <path d="M7.5 6h9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.8 10h8.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.2 14h7.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconCSS({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M5 3h14l-1.4 17L12 22l-5.6-2L5 3z"
        fill="currentColor"
        opacity="0.15"
      />
      <path d="M8 7h8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 11h5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 15h7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconJS({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" opacity="0.15" />
      <path d="M9 9v6a2 2 0 0 1-4 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 9h2.5a2 2 0 1 1 0 4H14v2a2 2 0 1 0 4 0" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconReact({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8" ry="3.4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <ellipse
        cx="12"
        cy="12"
        rx="3.4"
        ry="8"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.4"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        transform="rotate(60 12 12)"
      />
    </svg>
  );
}

export function IconNext({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.12" />
      <path d="M7.5 7.5h3.2l4.3 6.6V7.5h2.5v9" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7.5 16.5V7.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconTS({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" opacity="0.15" />
      <path d="M8 9h6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 9v7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 12c0-1.4 1-2.4 2.4-2.4 1.4 0 2.3 0.8 2.3 2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18.4 15.8c-1.4 0-2.4-0.8-2.4-2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconTailwind({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4.5 12c1.2-2.3 3-3.4 5.3-3.4 2.3 0 3.3 1.1 4.1 2.2 0.8 1.1 1.6 2.2 3.9 2.2 2.3 0 4.1-1.1 5.3-3.4"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M4.5 16.5c1.2-2.3 3-3.4 5.3-3.4 2.3 0 3.3 1.1 4.1 2.2 0.8 1.1 1.6 2.2 3.9 2.2 2.3 0 4.1-1.1 5.3-3.4"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

export function IconSass({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M6 14.5c0-4.2 5.5-7.5 10.5-7.5 2 0 3.5 0.8 3.5 2.3 0 1.9-2.1 3.5-4.2 3.5-1.1 0-1.9-0.6-1.9-1.4 0-1.1 1-1.9 2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
      <path
        d="M10 17.5c1.2-0.9 2.5-1.3 3.7-1.3 1.8 0 3.3 0.8 3.3 2 0 1.4-2 2.3-4.4 2.3-2.1 0-3.4-0.7-3.4-1.7"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
    </svg>
  );
}

export function IconZustand({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M5 8.5c2.3-2 5.1-3 8.5-3 1.9 0 3.6 0.3 5.5 0.9" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M6 15.5c1.8 1.7 4 2.6 6.8 2.6 2.3 0 4.2-0.6 6.2-1.7" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M8 11.8c0.8-1 2-1.6 3.4-1.6 1.3 0 2.4 0.5 3.2 1.4" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

export function IconAPI({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M4 12h3M17 12h3M12 4v3M12 17v3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconMap({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M12 22c4-4.2 6-7 6-9.5A6 6 0 0 0 6 12.5C6 15 8 17.8 12 22z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function IconAirtable({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M4 7l8 4 8-4-8-4-8 4z" fill="currentColor" opacity="0.2" />
      <path d="M4 7l8 4 8-4" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M12 11v9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4 7v9l8 4 8-4V7" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  );
}

export function IconWebflow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M4.5 7.5l3.4 9h2.3l2.6-6.2 1.9 6.2h2.3l3.6-9h-2.4l-2 5.5-1.7-5.5h-2.2l-2.3 5.5-1.6-5.5H4.5z" fill="currentColor" />
    </svg>
  );
}

export function IconKotlin({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M5 4h14l-7 8 7 8H5V4z" fill="currentColor" opacity="0.2" />
      <path d="M5 4h9l-9 10V4z" fill="currentColor" />
      <path d="M14 12l5 8h-9l4-8z" fill="currentColor" />
    </svg>
  );
}

export function IconFirebase({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path d="M6.5 20.5L12 3.5l5.5 17-5.5 2-5.5-2z" fill="currentColor" opacity="0.2" />
      <path d="M7.5 19l4.5-13 4.5 13-4.5 1.6L7.5 19z" fill="currentColor" />
    </svg>
  );
}

export function IconTanstackQuery({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.12" />
      <path d="M8 9h8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12h6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 15h4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 9.5c1.2 1.2 1.2 3.8-1.1 5.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function IconTanstackForm({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect x="5" y="5" width="14" height="14" rx="3" fill="currentColor" opacity="0.12" />
      <path d="M8 10h8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 14h6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 17h4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
