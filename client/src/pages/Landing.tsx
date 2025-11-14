//import { Button } from "@/components/ui/button";
import { MessageCircle, Activity, Lightbulb} from "lucide-react";
//, Star, ArrowRight 
import HowItWorksStep from "@/components/HowItWorksStep";
import SymptomCard from "@/components/SymptomCard";
import FeatureSection from "@/components/FeatureSection";
//import TestimonialCard from "@/components/TestimonialCard";
import { Thermometer, Moon, Heart, Brain, Wind, Smile } from "lucide-react";
 
import mockAnalysis from "@assets/mockanalysis.jpeg";
import chatMock from "@assets/chat.svg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      

      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
       {/*    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm text-muted-foreground">Trusted by 10,000+ women</span>
          </div> */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Vibrant Living
            </span>
            {" "}for Aging Women
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your compassionate AI companion for understanding your body, tracking your wellness, and navigating life's transitions with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           {/*  <Link href="/chat">
              <Button size="lg" className="rounded-full px-8 gap-2" data-testid="button-start-conversation">
                Start Conversation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link> */}
            <p className="text-sm text-muted-foreground">Free to start, no credit card required</p>
          </div>
        </div>
      </section>

  <section id="how-it-works" className="py-16 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start your journey to better understanding in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

  <section id="symptoms" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Common Symptoms We Track</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding your symptoms is the first step to managing them
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <SymptomCard
              icon={Brain}
              title="Brain Fog"
              description="Track cognitive changes and memory concerns"
            />
            <SymptomCard
              icon={Wind}
              title="Night Sweats"
              description="Document frequency and intensity"
            />
            <SymptomCard
              icon={Smile}
              title="Emotional Wellness"
              description="Monitor anxiety and emotional well-being"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto space-y-20">
          <FeatureSection
            title="Empathetic Conversations"
            description="Our AI listens and understands your unique experience with compassion and care."
            features={[
              "Natural, conversational interface",
              "Personalized questions based on your responses",
              "Safe, judgment-free space to share",
              "Available 24/7 whenever you need support",
            ]}
            imageSide="left"
            image={chatMock}
          />
          <FeatureSection
            title="Smart Symptom Analysis"
            description="Advanced AI technology that recognizes patterns and provides meaningful insights."
            features={[
              "Automatic symptom identification",
              "Pattern recognition over time",
              "Personalized health insights",
              "Easy-to-understand reports",
            ]}
            imageSide="right"
            image={mockAnalysis}
          />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">What Women Are Saying</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from women on their perimenopause journey
            </p>
          </div>
        {/*   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <TestimonialCard
              name="Maria K"
              age="45 years old"
              quote="I love how easy it is to use. The conversations feel so natural, and I've learned so much about my body."
              rating={5}
            />
            <TestimonialCard
              name="Lisa R"
              age="50 years old"
              quote="The personalized insights have been invaluable. I finally feel like I have support during this transition."
              rating={5}
            /> 
          </div>*/}
        </div>
      </section>

      {/* FAQs section so footer links have a target */}
      <section id="faqs" className="py-12 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Quick answers to common questions about Eirvana</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium">Is Eirvana free?</h3>
              <p className="text-sm text-muted-foreground">Yes — you can start for free. Some advanced features may require a subscription in the future.</p>
            </div>
            <div>
              <h3 className="font-medium">How is my data used?</h3>
              <p className="text-sm text-muted-foreground">We use your data to provide personalized insights. See our Privacy Policy for full details.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-semibold">Ready to Embrace Vibrant Living?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of aging women who have found support, understanding, and renewed vitality through Eirvana
          </p>
          {/* <Link href="/chat">
            <Button size="lg" className="rounded-full px-8 gap-2" data-testid="button-cta-start">
              Start Free Conversation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link> */}
          <p className="text-sm text-muted-foreground">No credit card required • Free to start</p>
        </div>
      </section>

      <footer className="border-t py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About Eirvana</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Eirvana provides vibrant living for aging women through AI-powered health support and personalized insights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#symptoms" className="hover:text-foreground transition-colors">Symptom Guide</a></li>
                <li><a href="#faqs" className="hover:text-foreground transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="mailto:founders@eirvana.org" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Eirvana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
