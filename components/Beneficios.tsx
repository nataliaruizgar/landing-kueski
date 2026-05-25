import { BENEFICIOS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

const ICONOS = [TiendaIcon, KueskiIcon, CoinsIcon];

export default function Beneficios() {
  return (
    <SectionWrapper className="bg-white pt-12 pb-10 tablet:pt-16 tablet:pb-14">
      <div className="max-w-[760px]">
        <h2 className="font-sora text-[32px] font-light leading-[1.1] text-gray-900 tablet:text-[44px]">
          Todo lo que necesitas para vender más,
          <span className="text-[#E26153]"> sin gastar miles de pesos.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 tablet:grid-cols-3">
        {BENEFICIOS.map((b, i) => {
          const Icon = ICONOS[i];
          const destacada = b.destacada === true;
          return (
            <article
              key={b.titulo}
              className={`group relative flex flex-col rounded-card border p-7 transition-all duration-300 hover:-translate-y-1 ${
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
