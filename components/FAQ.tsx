"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FAQ } from "@/lib/constants";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className="bg-white py-20 tablet:py-28">
      {/* Cabecera centrada */}
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="font-sora text-[36px] font-light leading-[1.1] text-gray-900 tablet:text-[52px]">
          Preguntas <span className="text-[#E26153]">frecuentes</span>
        </h2>
        <p className="mt-4 font-inter text-[16px] leading-[1.55] text-gray-700 tablet:text-[18px]">
          Todo lo que necesitas saber de T1 x Kueski
        </p>
      </div>

      {/* Lista una columna, sin card contenedora */}
      <div className="mx-auto mt-14 max-w-[860px] tablet:mt-20">
        <ul className="divide-y divide-gray-200">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors tablet:py-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-inter text-[16px] font-normal leading-[1.45] text-gray-900 tablet:text-[18px]">
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 flex-none text-[#E26153] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-7 opacity-100 tablet:pb-8" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 max-w-[760px] pr-8 font-inter text-[15px] leading-[1.65] text-gray-700 tablet:text-[16px]">
                    {item.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionWrapper>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
