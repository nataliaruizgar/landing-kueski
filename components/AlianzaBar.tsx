import Image from "next/image";

export default function AlianzaBar() {
  return (
    <section id="alianza" className="relative w-full bg-white pt-8 pb-14 tablet:pt-10 tablet:pb-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-gradient-to-br from-[#FFFAFA] via-white to-[#F8FAFF] p-8 shadow-card tablet:p-14">
          <div className="flex flex-col items-start gap-10 tablet:flex-row tablet:items-center tablet:gap-16">
            {/* Lockup T1 protagonista */}
            <div className="flex flex-none flex-col items-start gap-4">
              <Image src="/logos/T1.svg" alt="T1" width={88} height={88} priority />
              <div className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-4 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.06)]">
                <span className="font-inter text-[11px] font-semibold uppercase leading-none tracking-[0.15em] text-gray-600">
                  Con
                </span>
                <span className="inline-flex h-[16px] items-center -translate-y-[3px]">
                  <Image
                    src="/logos/Kueski.svg"
                    alt="Kueski"
                    width={88}
                    height={20}
                    style={{ height: "16px", width: "auto" }}
                  />
                </span>
                <span className="font-inter text-[11px] font-semibold uppercase leading-none tracking-[0.15em] text-gray-600">
                  incluido
                </span>
              </div>
            </div>

            <div className="hidden h-32 w-px bg-gray-200 tablet:block" />

            {/* Headline benefit-driven */}
            <div className="flex-1">
              <h2 className="font-sora text-[28px] font-light leading-[1.15] text-gray-900 tablet:text-[42px]">
                Tu tienda en línea, lista en minutos.{" "}
                <span className="text-[#E26153]">Tu cliente paga en quincenas, tú vendes más.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
