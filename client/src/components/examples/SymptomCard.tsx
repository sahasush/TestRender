import SymptomCard from '../SymptomCard'
import { Thermometer, Moon, Heart } from 'lucide-react'

export default function SymptomCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-background">
      <SymptomCard 
        icon={Thermometer}
        title="Hot Flashes"
        description="Track and understand your hot flash patterns"
      />
      <SymptomCard 
        icon={Moon}
        title="Sleep Changes"
        description="Monitor sleep quality and disturbances"
      />
      <SymptomCard 
        icon={Heart}
        title="Mood Shifts"
        description="Recognize emotional changes and patterns"
      />
    </div>
  )
}
