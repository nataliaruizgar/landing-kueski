"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  HERO_CHIPS,
  HERO_PLACEHOLDER,
  HERO_STATS_INLINE,
  SITE,
} from "@/lib/constants";

export default function Hero() {
  const [prompt, setPrompt] = useState("");

  const submit = () => {
    const trimmed = prompt.trim();
    const url = trimmed
      ? `${SITE.flujoCrearTienda}&prompt=${encodeURIComponent(trimmed)}`
      : SITE.flujoCrearTienda;
    window.location.href = url;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit();
  };

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pt-32 pb-12 tablet:pt-40 tablet:pb-16"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FDF0EF 0%, #FFF6F5 40%, #FFFFFF 85%, #FFFFFF 100%)",
      }}
    >
      {/* Glow blobs decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] animate-pulse-soft rounded-full opacity-70"
        style={{
          background: "radial-gradient(circle, #E59086 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[-120px] h-[420px] w-[420px] animate-pulse-soft rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, #F2B5AE 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "1.5s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        {/* Lockup co-brand — solo logos, sin pill */}
        <div className="mx-auto mb-14 flex max-w-fit items-center gap-6 tablet:mb-16 tablet:gap-8">
          <Image
            src="/logos/T1.svg"
            alt="T1"
            width={44}
            height={44}
            priority
            style={{ height: "40px", width: "auto" }}
            className="tablet:!h-[48px]"
          />
          <span className="font-sora text-[22px] font-light text-gray-400 tablet:text-[26px]">
            ×
          </span>
          <Image
            src="/logos/Kueski.svg"
            alt="Kueski"
            width={170}
            height={40}
            priority
            style={{ height: "32px", width: "auto" }}
            className="tablet:!h-[38px]"
          />
        </div>

        {/* H0 */}
        <h1 className="text-balance mx-auto max-w-[1040px] text-center font-sora text-[36px] font-light leading-[1.1] text-gray-900 tablet:text-[56px]">
          Crea tu tienda en línea y vende con{" "}
          <span className="text-[#E26153]">Kueski</span> desde el primer día.
        </h1>

        <p className="mx-auto mt-8 max-w-[680px] text-center font-inter text-[16px] font-light leading-[1.4] text-black tablet:mt-10 tablet:text-[18px] tablet:leading-[28px]">
          T1 te ayuda a vender, cobrar y enviar a todo México. Todo en uno.
        </p>

        {/* Recuadro prompt — estilo t1.com */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-[860px] rounded-[28px] bg-white px-6 pb-5 pt-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.15)] ring-1 ring-black/5 tablet:mt-16 tablet:px-7 tablet:pb-6 tablet:pt-7"
        >
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder={HERO_PLACEHOLDER}
            rows={3}
            maxLength={500}
            className="block min-h-[88px] w-full resize-none bg-transparent font-inter text-[16px] leading-[1.55] text-gray-900 placeholder:text-gray-400 focus:outline-none tablet:text-[18px]"
          />

          {/* Toolbar inferior dentro de la card */}
          <div className="mt-2 flex items-center justify-end gap-2.5">
            <span
              className={`font-inter text-[13px] tabular-nums transition-colors ${
                prompt.length > 0 ? "text-gray-700" : "text-gray-400"
              }`}
            >
              {prompt.length}/500
            </span>
            <button
              type="button"
              aria-label="Dictar por voz"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-oxford transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
            >
              <MicIcon className="h-[18px] w-[18px]" />
            </button>
            <button
              type="submit"
              aria-label="Crear mi tienda en línea"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E26153] text-white transition-all hover:bg-[#D85546] active:scale-95"
            >
              <ArrowUpIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
        </form>

        {/* Chips tipo pill — sólidos peach */}
        <div className="mx-auto mt-8 flex max-w-[760px] flex-wrap items-center justify-center gap-2 tablet:mt-10 tablet:gap-2.5">
          {HERO_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setPrompt(`Quiero vender productos de ${chip.toLowerCase()}`)}
              className="rounded-full bg-[#F8D2CC] px-3.5 py-1.5 font-inter text-[12px] font-medium text-[#4C4C4C] transition-all hover:bg-[#F2B5AE] hover:text-gray-900 tablet:px-5 tablet:py-2.5 tablet:text-[14px]"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Stats inline */}
        <p className="mx-auto mt-14 flex max-w-[760px] flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-inter text-[14px] font-medium text-gray-900 tablet:mt-20 tablet:gap-x-5 tablet:text-[17px]">
          {HERO_STATS_INLINE.map((s, i) => (
            <span key={s} className="inline-flex items-center gap-4 whitespace-nowrap tablet:gap-5">
              {s}
              {i < HERO_STATS_INLINE.length - 1 && (
                <span className="text-gray-400" aria-hidden="true">
                  •
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function MicIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="9"
        y="3"
        width="6"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18.5V22M8.5 22h7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowUpIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 19V5M5.5 11.5 12 5l6.5 6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
