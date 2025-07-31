import { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaLink: string;
  popular?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  ctaLabel,
  ctaLink,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <Card className={cn(
      "relative h-full",
      popular && "border-blue-500 shadow-lg",
      className
    )}>
      {popular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="mt-4 flex items-baseline text-gray-900">
          <span className="text-3xl font-extrabold tracking-tight">{price}</span>
          {price !== "Custom" && <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <p className="ml-3 text-sm text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "w-full",
            popular ? "bg-blue-600 hover:bg-blue-700" : ""
          )}
          asChild
        >
          <a href={ctaLink}>{ctaLabel}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}