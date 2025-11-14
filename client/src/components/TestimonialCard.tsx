import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  age?: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, age, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="p-6" data-testid={`card-testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary/10 text-primary">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{name}</p>
            {age && <p className="text-sm text-muted-foreground">{age}</p>}
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted"}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed italic">"{quote}"</p>
      </div>
    </Card>
  );
}
