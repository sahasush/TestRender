import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SymptomCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SymptomCard({ icon: Icon, title, description }: SymptomCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-shadow" data-testid={`card-symptom-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col items-start gap-3">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
