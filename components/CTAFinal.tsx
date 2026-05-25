import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 tablet:py-28">
      <div className="absolute inset-0 noise-overlay" aria-hidden="true" />

      {/* Glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(226,97,83,0.30) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,117,255,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
        {/* Lockup co-brand T1 × Kueski */}
        <div className="mx-auto mb-10 inline-flex items-center gap-5">
          <Image
            src="/logos/T1.svg"
            alt="T1"
            width={32}
            height={32}
            style={{ height: "32px", width: "auto" }}
          />
          <span className="font-sora text-[18px] font-light text-white/60">×</span>
          <Image
            src="/logos/Kueski.svg"
            alt="Kueski"
            width={110}
            height={26}
            style={{ height: "22px", width: "auto" }}
          />
        </div>

        <h2 className="font-sora text-[30px] font-light leading-[1.12] text-white tablet:whitespace-nowrap tablet:text-[48px]">
          ¿Listo para conectar tu negocio con T1?
        </h2>
        <p className="mx-auto mt-5 max-w-[860px] font-inter text-[15px] leading-[1.55] text-white tablet:mt-6 tablet:whitespace-nowrap tablet:text-[17px]">
          Un solo sistema para tu tienda física y en línea. Vende más, envía mejor y cobra seguro con T1.
        </p>

        <div className="mt-9 flex justify-center tablet:mt-10">
          <a
            href={SITE.flujoCrearTienda}
            className="inline-flex items-center justify-center rounded-full bg-[#E26153] px-9 py-3.5 font-inter text-[15px] font-medium text-white shadow-[0_14px_36px_-8px_rgba(226,97,83,0.7)] transition-all hover:bg-[#D85546] hover:shadow-[0_18px_44px_-8px_rgba(226,97,83,0.9)]"
          >
            Comienza ahora
          </a>
        </div>

        <p className="mx-auto mt-6 flex max-w-[760px] flex-wrap items-center justify-center gap-x-3 gap-y-1 font-inter text-[13px] font-medium text-white/70 tablet:mt-7 tablet:text-[14px]">
          <span>Sin costo de activación</span>
          <span className="text-white/30" aria-hidden="true">•</span>
          <span>Sin mensualidad</span>
          <span className="text-white/30" aria-hidden="true">•</span>
          <span>Sin contracargos</span>
        </p>
      </div>
    </section>
  );
}
