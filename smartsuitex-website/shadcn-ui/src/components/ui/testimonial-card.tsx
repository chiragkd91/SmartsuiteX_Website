import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarSrc?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  company,
  avatarSrc,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardContent className="pt-6 flex-1">
        <div className="mb-4 text-4xl text-blue-600">"</div>
        <p className="text-gray-700">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">
              {title}, {company}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}