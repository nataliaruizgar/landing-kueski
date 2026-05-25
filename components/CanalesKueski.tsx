"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { CANALES } from "@/lib/constants";

export default function CanalesKueski() {
  const [active, setActive] = useState(0);
  const c = CANALES[active];

  return (
    <SectionWrapper id="canales" className="bg-[#FFFAFA] py-20 tablet:py-28" wide>
      <div className="max-w-full">
        <h2 className="font-sora text-[32px] font-light leading-[1.1] text-gray-900 tablet:whitespace-nowrap tablet:text-[44px]">
          Tres formas de ofrecer Kueski Pay.{" "}
          <span className="text-[#E26153]">Una sola integración.</span>
        </h2>
        <p className="mt-5 max-w-[760px] font-inter text-[16px] leading-[1.6] text-oxford tablet:text-[17px]">
          Kueski Pay integrado en tres canales distintos. Elige el que más sirva
          a tu negocio, o úsalos todos.
        </p>
      </div>

      {/* Tabs paginados */}
      <div className="mt-12 grid gap-6 tablet:grid-cols-[1fr_1.3fr] tablet:gap-10">
        {/* Columna izquierda — tabs */}
        <div className="flex flex-col gap-3">
          {CANALES.map((canal, i) => {
            const isActive = active === i;
            return (
              <div
                key={canal.titulo}
                className={`group relative w-full overflow-hidden rounded-card border bg-white text-left transition-all duration-300 ${
                  isActive
                    ? "border-[#E26153]/30 shadow-cardHover"
                    : "border-gray-100 shadow-card hover:border-[#E26153]/20"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#E26153]" aria-hidden="true" />
                )}
                <button
                  onClick={() => setActive(i)}
                  className="block w-full p-5 text-left tablet:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`font-inter text-[11px] font-semibold uppercase tracking-[0.15em] ${
                        isActive ? "text-[#E26153]" : "text-gray-600"
                      }`}
                    >
                      {canal.eyebrow}
                    </span>
                    {canal.badge && (
                      <span className="rounded-full bg-[#E26153] px-2 py-0.5 font-inter text-[10px] font-semibold uppercase tracking-wider text-white">
                        {canal.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`mt-2 font-sora text-[20px] font-normal leading-[1.2] tablet:text-[22px] ${
                      isActive ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {canal.titulo}
                  </h3>
                  <p className="mt-2 font-inter text-[14px] leading-[1.5] text-gray-700">
                    {canal.descripcion}
                  </p>
                </button>

                {/* Mock visual dentro de la card SOLO en mobile cuando es activa */}
                {isActive && (
                  <div className="relative overflow-hidden border-t border-gray-100 bg-gradient-to-br from-[#FFEFEC] via-white to-[#F0F8FF] p-5 tablet:hidden">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-50"
                      style={{ background: "radial-gradient(circle, #F1B0A9, transparent 70%)", filter: "blur(50px)" }}
                    />
                    <div className="relative z-10">
                      {i === 0 && <LinkProductoMock />}
                      {i === 1 && <PasarelaMock />}
                      {i === 2 && <BotonT1Mock />}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Columna derecha — visual del canal activo (solo desktop) */}
        <div className="relative hidden overflow-hidden rounded-card bg-gradient-to-br from-[#FFEFEC] via-white to-[#F0F8FF] p-8 shadow-card tablet:block tablet:p-10">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-50"
            style={{ background: "radial-gradient(circle, #F1B0A9, transparent 70%)", filter: "blur(70px)" }}
          />

          <div className="relative z-10">
            <h3 className="font-sora text-[26px] font-normal leading-[1.15] text-gray-900 tablet:text-[32px]">
              {c.titulo}
            </h3>

            {/* Mock visual segun canal */}
            <div className="mt-7">
              {active === 0 && <LinkProductoMock />}
              {active === 1 && <PasarelaMock />}
              {active === 2 && <BotonT1Mock />}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function LinkProductoMock() {
  return (
    <div className="space-y-3">
      <div className="rounded-[18px] border border-gray-100 bg-white p-4 shadow-mockup">
        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <span>t1.com/p/aretes-luna</span>
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
            Link activo
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="relative h-14 w-14 flex-none overflow-hidden rounded-xl">
            <Image
              src="/img/aretes-luna.jpeg"
              alt="Aretes Luna · Plata 925"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-inter text-[14px] font-semibold text-gray-900">
              Aretes Luna · Plata 925
            </p>
            <p className="font-inter text-[13px] text-gray-600">$890 MXN</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-[12px] border border-[#0075FF]/20 bg-[#0075FF]/5 p-3">
          <div className="flex items-center gap-2">
            <Image src="/logos/Kueski.svg" alt="Kueski" width={56} height={14} style={{ height: "14px", width: "auto" }} />
            <span className="font-inter text-[12px] text-[#0075FF]">
              4 quincenas de $222.50
            </span>
          </div>
          <span className="font-inter text-[11px] font-semibold uppercase tracking-wider text-[#0075FF]">
            Sin tarjeta
          </span>
        </div>
      </div>
      <div className="rounded-[18px] border border-gray-100 bg-white p-3 shadow-mockup">
        <p className="text-center font-inter text-[11px] text-gray-700">
          Ya puedes compartir tu link
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex-1 rounded-[10px] border border-gray-200 px-2.5 py-2">
            <p className="truncate font-inter text-[11px] text-gray-700">
              https://pay.t1.com/052512bHljWi
            </p>
          </div>
          <button
            type="button"
            className="flex flex-none items-center gap-1 rounded-[10px] border border-gray-200 px-2.5 py-2 font-inter text-[11px] text-gray-700"
          >
            <CopyIcon className="h-3 w-3" />
            Copiar
          </button>
        </div>
        <button
          type="button"
          className="mt-1.5 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#25D366] py-2 text-white"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          <span className="font-inter text-[12px] font-medium">
            Compartir vía WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}

function CopyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.14h-.01c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.21.84.86-3.13-.2-.32a8.21 8.21 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.04 8.32zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z" />
    </svg>
  );
}

function PasarelaMock() {
  return (
    <div>
      <p className="font-sora text-[18px] font-normal text-gray-900">Método de pago</p>

      <div className="mt-4 overflow-hidden rounded-[16px] border border-gray-200 bg-white shadow-mockup">
        {/* Tarjetas */}
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="block h-5 w-5 flex-none rounded-full border border-gray-300" />
            <span className="font-inter text-[14px] text-gray-900">
              Tarjetas de crédito o débito
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <VisaLogo />
            <MasterCardLogo />
            <AmexLogo />
            <CarnetLogo />
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        {/* SPEI */}
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="block h-5 w-5 flex-none rounded-full border border-gray-300" />
            <span className="font-inter text-[14px] text-gray-900">
              Transferencia bancaria
            </span>
          </div>
          <SpeiLogo />
        </div>

        <div className="h-px bg-gray-100" />

        {/* Kueski Pay (seleccionado) */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full border-[1.5px] border-gray-900">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-900" />
              </span>
              <span className="font-inter text-[14px] font-medium text-gray-900">
                Kueski Pay
              </span>
            </div>
            <Image
              src="/logos/Kueski.svg"
              alt="Kueski"
              width={72}
              height={16}
              style={{ height: "16px", width: "auto" }}
            />
          </div>
          <p className="mt-3 font-inter text-[12px] leading-[1.5] text-gray-600">
            Al dar click en pagar, te redirigiremos a Kueski para completar tu compra.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Logos de métodos de pago ───────────── */

function VisaLogo() {
  return (
    <span className="flex h-6 w-9 items-center justify-center rounded-[4px] bg-white ring-1 ring-gray-200">
      <span className="font-sora text-[10px] font-bold italic tracking-tight text-[#1A1F71]">
        VISA
      </span>
    </span>
  );
}

function MasterCardLogo() {
  return (
    <span className="flex h-6 w-9 items-center justify-center rounded-[4px] bg-white ring-1 ring-gray-200">
      <span className="relative flex h-4 w-7 items-center justify-center">
        <span className="absolute left-0 h-4 w-4 rounded-full bg-[#EB001B]" />
        <span className="absolute right-0 h-4 w-4 rounded-full bg-[#F79E1B] mix-blend-multiply" />
      </span>
    </span>
  );
}

function AmexLogo() {
  return (
    <span className="flex h-6 w-9 items-center justify-center rounded-[4px] bg-[#1F72CD]">
      <span className="font-inter text-[8px] font-bold leading-none tracking-[0.02em] text-white">
        AMEX
      </span>
    </span>
  );
}

function CarnetLogo() {
  return (
    <span className="flex h-6 w-9 items-center justify-center rounded-[4px] bg-white ring-1 ring-gray-200">
      <span className="relative inline-flex items-center">
        <span className="font-inter text-[8px] font-bold leading-none tracking-tight text-[#E30613]">
          CAR
        </span>
        <span className="font-inter text-[8px] font-bold leading-none tracking-tight text-gray-900">
          NET
        </span>
      </span>
    </span>
  );
}

function SpeiLogo() {
  return (
    <span className="flex h-6 w-12 items-center justify-center">
      <span className="font-sora text-[14px] font-bold tracking-tight">
        <span className="text-[#1F4D8B]">SP</span>
        <span className="text-[#E66B17]">E</span>
        <span className="text-[#1F4D8B]">I</span>
      </span>
    </span>
  );
}

function BotonT1Mock() {
  return (
    <div className="rounded-[18px] border border-gray-100 bg-white p-4 shadow-mockup tablet:p-5">
      <div className="grid grid-cols-1 gap-5 tablet:grid-cols-[1fr_1.05fr]">
        {/* Columna izquierda — Pago exprés + contacto */}
        <div className="flex flex-col">
          <p className="text-center font-inter text-[11px] text-gray-700">Pago exprés</p>
          <button
            type="button"
            className="mt-2 flex h-10 w-full items-center justify-center rounded-full bg-[#E03B2B] shadow-[0_6px_16px_-6px_rgba(224,59,43,0.5)]"
          >
            <span className="font-sora text-[15px] font-semibold tracking-tight text-white">
              T1
            </span>
          </button>

          {/* Divider con dot */}
          <div className="relative my-3 flex items-center">
            <span className="h-px flex-1 bg-gray-200" />
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-gray-200" />
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="flex items-baseline justify-between">
            <p className="font-inter text-[11px] font-semibold text-gray-900">
              Información de contacto
            </p>
            <a className="font-inter text-[10px] text-gray-600 underline decoration-gray-300 underline-offset-2">
              Iniciar sesión
            </a>
          </div>

          <div className="mt-2 rounded-[8px] border border-gray-200 px-2.5 py-2">
            <p className="font-inter text-[10px] text-gray-400">Correo electrónico *</p>
          </div>
        </div>

        {/* Columna derecha — resumen del carrito */}
        <div className="flex flex-col">
          <div className="flex items-start gap-2.5">
            <div className="relative h-9 w-9 flex-none overflow-hidden rounded-[6px] bg-gray-100">
              <Image
                src="/img/smartwatch.jpeg"
                alt="Smart Watch Advance 3"
                fill
                sizes="36px"
                className="object-cover"
              />
              <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gray-900 font-inter text-[8px] font-semibold text-white">
                1
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="font-inter text-[10px] font-semibold leading-tight text-gray-900">
                  SMART WATCH ADVANCE 3
                </p>
                <p className="flex-none font-inter text-[10px] font-semibold text-gray-900">
                  $4,799
                </p>
              </div>
              <p className="mt-0.5 font-inter text-[9px] text-gray-500">SW-A3</p>
              <p className="mt-0.5 font-inter text-[9px] text-gray-500">
                Color verde, Talla única
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-stretch gap-1.5">
            <div className="flex-1 rounded-[6px] border border-gray-200 px-2 py-1.5">
              <p className="truncate font-inter text-[9px] text-gray-400">
                Código de descuento
              </p>
            </div>
            <button
              type="button"
              className="rounded-[6px] bg-[#BBD5FF] px-2.5 font-inter text-[10px] font-semibold text-[#5A8EE6]"
            >
              Aplicar
            </button>
          </div>

          <div className="my-2.5 h-px bg-gray-100" />

          <div className="flex items-baseline justify-between">
            <p className="font-inter text-[10px] text-gray-700">Subtotal (1 producto)</p>
            <p className="font-inter text-[10px] font-medium text-gray-900">$4,799</p>
          </div>
          <div className="mt-1 flex items-baseline justify-between">
            <p className="font-inter text-[12px] font-bold text-gray-900">Total</p>
            <p className="font-inter text-[12px] font-bold text-gray-900">$4,799</p>
          </div>

          <div className="mt-3 flex items-center justify-between gap-2 rounded-[10px] border border-[#0075FF]/20 bg-[#0075FF]/5 px-2.5 py-2">
            <div className="flex min-w-0 items-center gap-1.5">
              <Image
                src="/logos/Kueski.svg"
                alt="Kueski"
                width={48}
                height={12}
                style={{ height: "12px", width: "auto" }}
              />
              <span className="font-inter text-[10px] text-[#0075FF]">
                4 quincenas de $1,199.75
              </span>
            </div>
            <span className="flex-none font-inter text-[8px] font-semibold uppercase tracking-wider text-[#0075FF]">
              Sin tarjeta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M16 6l-4-4-4 4M12 2v13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
