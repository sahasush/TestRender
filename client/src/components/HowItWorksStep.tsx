import { LucideIcon } from "lucide-react";

interface HowItWorksStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export default function HowItWorksStep({ icon: Icon, title, description, step }: HowItWorksStepProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4" data-testid={`step-${step}`}>
      <div className="relative">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
          <span className="text-xs font-bold text-primary">{step}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
