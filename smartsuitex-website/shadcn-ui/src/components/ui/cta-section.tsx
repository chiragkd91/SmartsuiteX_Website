import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  bgColor?: "light" | "dark" | "accent";
}

export function CTASection({
  title,
  description,
  children,
  className,
  bgColor = "light",
}: CTASectionProps) {
  const bgClasses = {
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    accent: "bg-blue-600 text-white",
  };

  return (
    <section
      className={cn(
        "py-16 px-4",
        bgClasses[bgColor],
        className
      )}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {description && <p className="text-lg mb-8 opacity-90">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}