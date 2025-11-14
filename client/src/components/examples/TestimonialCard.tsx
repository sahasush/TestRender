import TestimonialCard from '../TestimonialCard'

export default function TestimonialCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-background">
      <TestimonialCard 
        name="Sarah M"
        age="48 years old"
        quote="This app helped me understand what I was going through. The AI is incredibly empathetic and never makes me feel judged."
        rating={5}
      />
      <TestimonialCard 
        name="Jennifer L"
        age="52 years old"
        quote="Finally, a tool that actually listens! I can track my symptoms and get insights that help me talk to my doctor."
        rating={5}
      />
    </div>
  )
}
