"use client";

import { useEffect, useRef, useState } from "react";
import { BENEFICIOS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

const ICONOS = [TiendaIcon, KueskiIcon, CoinsIcon];

export default function Beneficios() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(trackCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      setActiveIndex(closestIndex);
    };
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (i: number) => {
    const card = cardRefs.current[i];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(BENEFICIOS.length - 1, activeIndex + 1));

  return (
    <SectionWrapper className="bg-white pt-12 pb-10 tablet:pt-16 tablet:pb-14">
      <div className="max-w-[760px]">
        <h2 className="font-sora text-[32px] font-light leading-[1.1] text-gray-900 tablet:text-[44px]">
          Todo lo que necesitas para vender más,
          <span className="text-[#E26153]"> sin gastar miles de pesos.</span>
        </h2>
      </div>

      {/* Track: carrusel horizontal en mobile, grid en desktop */}
      <div
        ref={trackRef}
        className="no-scrollbar -mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 tablet:mx-0 tablet:grid tablet:snap-none tablet:grid-cols-3 tablet:gap-6 tablet:overflow-visible tablet:px-0"
      >
        {BENEFICIOS.map((b, i) => {
          const Icon = ICONOS[i];
          const destacada = b.destacada === true;
          return (
            <article
              key={b.titulo}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`group relative flex w-[85%] flex-none snap-center flex-col rounded-card border p-7 transition-all duration-300 hover:-translate-y-1 tablet:w-auto tablet:flex-1 tablet:snap-none ${
                destacada
                  ? "border-[#E26153]/35 bg-gradient-to-br from-white via-[#FFF7F6] to-[#FFEFEC] shadow-[0_18px_45px_-10px_rgba(226,97,83,0.20)] hover:border-[#E26153]/60 hover:shadow-[0_24px_60px_-12px_rgba(226,97,83,0.30)]"
                  : "border-gray-100 bg-white shadow-card hover:border-[#E26153]/25 hover:shadow-cardHover"
              }`}
            >
              {/* Glow hover (solo en cards normales) */}
              {!destacada && (
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-card bg-gradient-to-br from-[#FFEAE6] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}

              {/* Badge EXCLUSIVO en card destacada */}
              {destacada && (
                <span className="absolute right-5 top-5 rounded-full bg-[#E26153] px-2.5 py-1 font-inter text-[10px] font-semibold uppercase tracking-wider text-white">
                  Exclusivo
                </span>
              )}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${
                  destacada
                    ? "bg-[#E26153] text-white"
                    : "bg-[#FEF4F4] text-[#E26153]"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <span className="mt-5 font-inter text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E26153]">
                {b.tag}
              </span>
              <h3 className="mt-2 font-sora text-[22px] font-normal leading-[1.2] text-gray-900 tablet:text-[24px]">
                {b.titulo}
              </h3>
              <p className="mt-3 font-inter text-[15px] leading-[1.55] text-gray-700">
                {b.descripcion}
              </p>
            </article>
          );
        })}
      </div>

      {/* Controles del carrusel — solo mobile */}
      <div className="mt-6 flex items-center justify-between tablet:hidden">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Anterior"
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-opacity disabled:opacity-40"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={goNext}
            disabled={activeIndex === BENEFICIOS.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-opacity disabled:opacity-40"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          {BENEFICIOS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a tarjeta ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-[#E26153]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function TiendaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 8h16l-1.2 11.2A1.5 1.5 0 0 1 17.3 20.5H6.7a1.5 1.5 0 0 1-1.5-1.3L4 8z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 8l1.4-3.3A2 2 0 0 1 7.2 3.5h9.6a2 2 0 0 1 1.8 1.2L20 8M9 12v.5a3 3 0 0 0 6 0V12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function KueskiIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M7 15h3m4 0h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CoinsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse cx="9" cy="7.5" rx="5.5" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 7.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3.5 11.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <ellipse cx="16.5" cy="14" rx="4" ry="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12.5 14v3c0 1.1 1.8 2 4 2s4-.9 4-2v-3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ChevronLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m15 6-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
