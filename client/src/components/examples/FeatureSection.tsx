import FeatureSection from '../FeatureSection'

export default function FeatureSectionExample() {
  return (
    <div className="p-8 bg-background">
      <FeatureSection 
        title="Empathetic Conversations"
        description="Our AI listens and understands your unique experience with compassion and care."
        features={[
          "Natural, conversational interface",
          "Personalized questions based on your responses",
          "Safe, judgment-free space to share",
          "Available 24/7 whenever you need support"
        ]}
        imageSide="left"
      />
    </div>
  )
}
