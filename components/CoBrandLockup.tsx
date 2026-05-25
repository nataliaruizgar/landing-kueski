import Image from "next/image";

type Props = {
  height?: number;
  className?: string;
  variant?: "light" | "dark";
};

export default function CoBrandLockup({ height = 28, className = "", variant = "light" }: Props) {
  const dividerColor = variant === "dark" ? "bg-white/40" : "bg-gray-300";

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logos/T1.svg"
        alt="T1"
        width={height}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height: `${height}px` }}
      />
      <span className={`block h-5 w-px ${dividerColor}`} aria-hidden="true" />
      <span
        className={`font-inter text-[12px] font-medium uppercase tracking-[0.18em] ${
          variant === "dark" ? "text-white/80" : "text-gray-600"
        }`}
      >
        ×
      </span>
      <span className={`block h-5 w-px ${dividerColor}`} aria-hidden="true" />
      <Image
        src="/logos/Kueski.svg"
        alt="Kueski"
        width={height * 4}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height: `${height * 0.7}px` }}
      />
    </div>
  );
}
