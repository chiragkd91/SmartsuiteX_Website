import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  children,
  className,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 px-4 overflow-hidden",
        backgroundImage ? "text-blue-900" : "bg-white text-Blue-900",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/90 mix-blend-multiply"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
        </div>
      )}

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl mb-8 text-black font-semibold">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}