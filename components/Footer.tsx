import Image from "next/image";

const LINKS_SOLUCIONES = [
  { label: "T1tienda", href: "https://t1.com/t1tienda" },
  { label: "T1pagos", href: "https://t1.com/t1pagos" },
  { label: "T1envíos", href: "https://t1.com/t1envios" },
  { label: "T1score", href: "https://t1.com/t1score" },
];

const LINKS_T1 = [
  { label: "¿Qué es T1?", href: "https://t1.com" },
  { label: "Únete a T1", href: "https://t1.com/contacto" },
  { label: "Historias de éxito", href: "https://t1.com/historias" },
  { label: "Contacto", href: "mailto:hola@t1.com" },
];

const SOCIALES = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/t1latam", icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/t1latam_", icon: InstagramIcon },
  { label: "X", href: "https://x.com/t1latam_", icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com/T1latinoamerica", icon: FacebookIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@t1latam_", icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20 tablet:py-24">
        {/* Grid superior — 3 columnas */}
        <div className="grid gap-12 tablet:grid-cols-3 tablet:gap-16">
          {/* Columna 1: Logo + sociales */}
          <div>
            <Image
              src="/logos/T1.svg"
              alt="T1"
              width={56}
              height={56}
              style={{ height: "44px", width: "auto" }}
            />
            <div className="mt-8 flex items-center gap-3">
              {SOCIALES.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/85 transition-colors hover:bg-white/15 hover:text-white"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Soluciones */}
          <div>
            <p className="font-inter text-[15px] font-semibold text-white">Soluciones</p>
            <ul className="mt-5 space-y-3.5">
              {LINKS_SOLUCIONES.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-inter text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: T1 */}
          <div>
            <p className="font-inter text-[15px] font-semibold text-white">T1</p>
            <ul className="mt-5 space-y-3.5">
              {LINKS_T1.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-inter text-[14px] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-8 tablet:flex-row tablet:items-center tablet:justify-between">
          {/* Selector país */}
          <button className="inline-flex items-center gap-2 font-inter text-[13px] text-white/85 transition-colors hover:text-white">
            <span aria-hidden="true">🇲🇽</span>
            México (Español)
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </button>

          {/* Legales */}
          <div className="flex items-center gap-4 font-inter text-[13px] text-white/70">
            <a href="#" className="transition-colors hover:text-white">
              Términos y condiciones
            </a>
            <span className="text-white/30" aria-hidden="true">
              |
            </span>
            <a href="#" className="transition-colors hover:text-white">
              Privacidad
            </a>
          </div>

          {/* Copyright */}
          <p className="font-inter text-[13px] text-white/60">
            © {new Date().getFullYear()} T1. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.02h4.56V23H.22V8.02zM7.95 8.02h4.36v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.55v-6.71c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V23H7.95V8.02z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.77l-.44 2.9h-2.33V22c4.78-.75 8.44-4.91 8.44-9.94z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 6.7a5.2 5.2 0 0 1-3.06-1.07A5.18 5.18 0 0 1 14.54 2H11.4v13.27a2.65 2.65 0 0 1-2.65 2.65 2.65 2.65 0 0 1-2.65-2.65 2.65 2.65 0 0 1 2.65-2.65c.27 0 .54.04.79.12V9.55a5.78 5.78 0 0 0-.79-.05 5.84 5.84 0 0 0-5.83 5.84A5.84 5.84 0 0 0 8.75 21.18a5.84 5.84 0 0 0 5.84-5.84V8.66a8.24 8.24 0 0 0 5.01 1.7V7.24a4.84 4.84 0 0 1 0-.54z" />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
