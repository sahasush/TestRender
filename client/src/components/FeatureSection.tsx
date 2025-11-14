import { Check } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  imageSide?: "left" | "right";
  /** optional image src to display beside the text */
  image?: string;
}

export default function FeatureSection({ title, description, features, imageSide = "left", image }: FeatureSectionProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${imageSide === "right" ? "md:flex-row-reverse" : ""}`}>
      {/* image column */}
      {image ? (
        <div className={`${imageSide === "right" ? "md:order-2" : ""}`}>
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden rounded-lg">
            <img src={image} alt={`${title} illustration`} className="object-contain object-center w-full h-full" />
          </div>
        </div>
      ) : null}

      <div className={`space-y-6 ${imageSide === "right" ? "md:order-1" : ""}`}>
        <div>
          <h3 className="text-3xl font-semibold mb-4">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
