import SectionWrapper from "./SectionWrapper";
import { PASOS } from "@/lib/constants";

export default function PasosActivacion() {
  return (
    <SectionWrapper id="activar" className="bg-white py-20 tablet:py-28">
      <div>
        <h2 className="font-sora text-[32px] font-light leading-[1.1] text-gray-900 tablet:whitespace-nowrap tablet:text-[44px]">
          Empieza a vender con T1 en
          <span className="text-[#E26153]"> 3 pasos.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-10 tablet:grid-cols-3 tablet:gap-8">
        {PASOS.map((p, i) => (
          <div key={p.n} className="relative">
            <div className="font-sora text-[64px] font-light leading-none tracking-[-0.04em] text-[#E26153] tablet:text-[80px]">
              {p.n}
            </div>
            <h3 className="mt-4 font-sora text-[22px] font-normal leading-[1.2] text-gray-900 tablet:text-[24px]">
              {p.titulo}
            </h3>
            <p className="mt-3 font-inter text-[14px] leading-[1.55] text-gray-700 tablet:text-[15px]">
              {p.descripcion}
            </p>

            {/* línea vertical mobile entre pasos */}
            {i < PASOS.length - 1 && (
              <div className="mt-6 h-px w-12 bg-gray-200 tablet:hidden" />
            )}
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
}
