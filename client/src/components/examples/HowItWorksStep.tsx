import HowItWorksStep from '../HowItWorksStep'
import { MessageCircle, Activity, Lightbulb } from 'lucide-react'

export default function HowItWorksStepExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-background">
      <HowItWorksStep 
        icon={MessageCircle}
        title="Share Your Experience"
        description="Have a natural conversation about how you're feeling"
        step={1}
      />
      <HowItWorksStep 
        icon={Activity}
        title="Track Symptoms"
        description="Our AI identifies and tracks your symptoms automatically"
        step={2}
      />
      <HowItWorksStep 
        icon={Lightbulb}
        title="Get Insights"
        description="Receive personalized insights and recommendations"
        step={3}
      />
    </div>
  )
}
