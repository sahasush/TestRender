import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, Mail, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiClient } from "@/lib/api-client";
import { useToast } from "@/hooks/use-toast";



const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_PUBLIC_API_KEY; 

if (!API_BASE_URL || !API_KEY) {
    console.error("Missing VITE_API_BASE_URL or VITE_PUBLIC_API_KEY in environment.");
    // This is a safety measure; the app will likely not work without them.
}

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
		
	  if (!API_BASE_URL || !API_KEY) {
      toast({
          title: "Configuration Error",
          description: "API URL or Key is missing. Check your environment variables.",
          variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
	const fullUrl = `${API_BASE_URL}/api/waitlist`;
	const res = await fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY, // <--- Send the API Key required by securePublicEndpoint
        },
        body: JSON.stringify(formData),
      });
	  
	  
      const response = await res.json();

      if (res.ok && response.success) {
        setIsSubmitted(true);
        toast({
          title: "Welcome to the Waitlist!",
          description: "Thank you for joining! We'll keep you updated on our progress.",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: response.message || `API Error: ${res.status} ${res.statusText}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Waitlist network error:', error);
      toast({
        title: "Connection Error",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
        action: (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleSubmit(e)}
            disabled={isSubmitting}
          >
            Retry
          </Button>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">You're on the list!</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Thank you for your interest in Eirvana. We'll notify you as soon as early access becomes available.
          </p>
          <Link href="/">
            <a className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              Back to Home
            </a>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/aboutus">
            <a className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to About Us
            </a>
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get Early Access
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              Be among the first to experience Eirvana's personalized health support
            </p>
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Join our waitlist and get notified when we launch. No spam, just updates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-12 h-12"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-12 h-12"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                  What interests you most about Eirvana? (Optional)
                </label>
                <Textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                  placeholder="Tell us what you're hoping to get from Eirvana..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-semibold"
              >
                {isSubmitting ? "Joining Waitlist..." : "Join the Waitlist"}
              </Button>

              <p className="text-sm text-gray-500 text-center leading-relaxed">
                By joining our waitlist, you agree to receive updates about Eirvana. 
                You can unsubscribe at any time.
              </p>
            </form>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-white/50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Early Access</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Be the first to try our platform when it launches</p>
            </div>

            <div className="text-center p-6 bg-white/50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Special Perks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Exclusive benefits for early supporters</p>
            </div>

            <div className="text-center p-6 bg-white/50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shape the Product</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Help us build features you actually need</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}