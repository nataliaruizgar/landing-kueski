"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Ecosistema", href: "#alianza", hasCaret: true },
  { label: "¿Qué es T1?", href: "#alianza" },
  { label: "Planes", href: "#precios" },
];

const MOBILE_NAV_LINKS = [
  { label: "Ecosistema", href: "#alianza", hasCaret: true },
  { label: "¿Por qué T1?", href: "#alianza" },
  { label: "¿Cómo funciona?", href: "#activar" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
        <div className="flex h-[72px] w-full items-center justify-between px-6 tablet:px-10">
          {/* Logo — T1tienda en desktop, T1 solo en mobile */}
          <a href="#top" className="flex items-center" aria-label="T1tienda">
            <Image
              src="/logos/T1tienda.svg"
              alt="T1tienda"
              width={150}
              height={38}
              priority
              style={{ height: "32px", width: "auto" }}
              className="hidden lg:block"
            />
            <Image
              src="/logos/T1.svg"
              alt="T1"
              width={48}
              height={48}
              priority
              style={{ height: "32px", width: "auto" }}
              className="block lg:hidden"
            />
          </a>

          {/* Nav + CTAs derecha (desktop) */}
          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="inline-flex items-center gap-1 font-inter text-[15px] font-normal text-oxford transition-colors hover:text-black"
                >
                  {l.label}
                  {l.hasCaret && <CaretDownIcon className="h-3.5 w-3.5" />}
                </a>
              ))}
            </nav>

            <a
              href="https://app.t1.com/login"
              className="font-inter text-[15px] font-normal text-oxford transition-colors hover:text-black"
            >
              Iniciar sesión
            </a>
            <a
              href={SITE.flujoCrearTienda}
              className="rounded-full bg-[#E26153] px-6 py-3 font-inter text-[15px] font-medium text-white transition-all hover:bg-[#D85546] hover:shadow-[0_10px_30px_-6px_rgba(226,97,83,0.6)]"
            >
              Empieza gratis
            </a>
          </div>

          {/* Mobile menu button (3 líneas) */}
          <button
            aria-label="Abrir menú"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setOpen(true)}
          >
            <span className="relative block h-[14px] w-6">
              <span className="absolute left-0 top-0 h-[2px] w-6 rounded-sm bg-gray-900" />
              <span className="absolute left-0 top-1/2 h-[2px] w-6 -translate-y-1/2 rounded-sm bg-gray-900" />
              <span className="absolute bottom-0 left-0 h-[2px] w-6 rounded-sm bg-gray-900" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay full-screen */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white lg:hidden">
          <div className="flex h-[72px] w-full items-center justify-between px-6">
            <a
              href="#top"
              className="flex items-center"
              aria-label="T1"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/logos/T1.svg"
                alt="T1"
                width={48}
                height={48}
                style={{ height: "32px", width: "auto" }}
              />
            </a>
            <button
              aria-label="Cerrar menú"
              className="-mr-2 flex h-11 w-11 items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <XIcon className="h-7 w-7 text-gray-900" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 px-6 pt-4">
            {MOBILE_NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="inline-flex w-fit items-center gap-2 px-2 py-2 font-inter text-[15px] font-bold text-[#4C4C4C] transition-colors hover:text-[#DB3B2B]"
              >
                {l.label}
                {l.hasCaret && <CaretDownIcon className="h-3.5 w-3.5" strokeWidth={2.5} />}
              </a>
            ))}
            <a
              href="https://app.t1.com/login"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-2 px-2 py-2 font-inter text-[15px] font-bold text-[#4C4C4C] transition-colors hover:text-[#DB3B2B]"
            >
              Iniciar sesión
              <ChevronRightIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

function CaretDownIcon({
  className = "",
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({
  className = "",
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6l12 12M6 18 18 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
