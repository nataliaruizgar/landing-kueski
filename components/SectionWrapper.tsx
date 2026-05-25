import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

export default function SectionWrapper({ id, children, className = "", wide = false }: Props) {
  return (
    <section id={id} className={`relative w-full overflow-hidden ${className}`}>
      <div
        className={`relative z-10 mx-auto px-6 ${
          wide ? "max-w-[1280px]" : "max-w-[1180px]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
