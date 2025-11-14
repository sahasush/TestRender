import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Users, Target, Award } from "lucide-react";
import aboutusImage from "@assets/aboutus.jpeg";
import paridhiImage from "@assets/PP_HS.jpeg";
import sushmitaImage from "@assets/SS_HS.jpeg";
import LinkedInIcon from "@assets/Linkedin.svg";
// LinkedIn SVG Icon Component


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      {/*   <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src="/favicon.svg" alt="Eirvana" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Eirvana
              </span>
            </a>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-gray-600 hover:text-purple-600 transition-colors">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-purple-600 font-semibold">About Us</a>
            </Link>
            <Link href="/login">
              <a className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                Get Started
              </a>
            </Link>
          </nav>
        </div>
      </header> */}

      {/* About Eirvana */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            About Eirvana
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Empowering aging women to live vibrantly through compassionate AI-powered health support
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Eirvana, we believe that every woman deserves to age with dignity,
                confidence, and vitality. Our mission is to provide personalized,
                empathetic health support that helps women navigate the unique challenges
                of aging with grace and empowerment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through innovative AI technology and compassionate care, we're creating
                a supportive community where women can find answers, track their health,
                and connect with resources that matter most to them.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="md:order-2">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden rounded-lg">
                  <img src={aboutusImage} alt={"Support"} className="object-contain object-center w-full h-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide the tools, insights, and knowledge women need to take
                control of their health and make informed decisions with confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Empathy</h3>
              <p className="text-gray-600 leading-relaxed">
                We lead with compassion and understanding, creating a safe space
                where women feel heard, validated, and supported in their health journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of connection. By bringing women together,
                we create a supportive network where experiences are shared and wisdom is celebrated.
              </p>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Eirvana was founded from deeply personal journeys.
              For years, we each endured unexplained fatigue, weight fluctuations, mood changes, and cycles of doctor visits and labs — yet consistently heard "everything looks normal." Our professional lives moved at pace, but our bodies did not receive the same clarity or support.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We met accidentally on a hiking trail and discovered we were not alone — nor were millions of other women searching for answers, relief, and dignity during perimenopause and menopause.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Eirvana began with a shared realization:
              Women deserve better — knowledge, compassion, and tools tailored to their evolving physiology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Why It Matters
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Over 1 billion women worldwide are entering menopause this decade — yet most face confusion, trial-and-error, and medical dismissal.
              Women spend nearly one-third of their lives in menopause, yet the experience remains fragmented, misunderstood, and under-supported by traditional healthcare.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              The women's health market is rapidly shifting, with growing demand for:
            </p>
            <ul className="text-lg text-gray-600 mb-6 leading-relaxed ml-6 space-y-2">
              <li>• Personalized hormonal health insights</li>
              <li>• Data-driven and proactive wellness tools</li>
              <li>• Culturally attuned and compassionate care</li>
              <li>• Scalable digital health platforms</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The convergence of AI, personalized biomarkers, and modern women's health awareness presents an unprecedented opportunity to reimagine this long-neglected category.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We knew technology could bridge this gap—not to replace human care,
              but to complement it with 24/7 accessibility, personalized insights,
              and empathetic support. Our team of healthcare professionals, AI experts,
              and advocates for women's health came together with a shared vision:
              to create a platform that truly understands and supports aging women.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, Eirvana is more than a health platform—it's a movement toward
              vibrant, empowered aging for women everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Our Solution
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Eirvana is a personalized AI health companion that helps you understand what's happening in your body during perimenopause and menopause. Unlike generic advice that treats every woman the same, our app analyzes your unique DNA, lifestyle patterns, and health history to answer the questions that matter most: Why am I experiencing this symptom? What's actually happening in MY body? What solutions will work for ME?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Track your symptoms, discover patterns you might have missed, and receive personalized insights rooted in science—not guesswork. Whether you're trying to understand why you can't sleep, why your weight is changing, or why your doctor keeps saying "everything looks normal," Eirvana connects the dots between your symptoms and their root causes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              How It Works
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600">
                <p><span className="font-semibold text-purple-600 text-xl">1. Share Your Story</span></p>
                <p className="mt-2">Tell us about your symptoms, health history, and what you're experiencing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600">
                <p><span className="font-semibold text-purple-600 text-xl">2. Get Personalized Insights</span></p>
                <p className="mt-2">Our AI analyzes your unique biology, lifestyle, and patterns to explain what's happening</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600">
                <p><span className="font-semibold text-purple-600 text-xl">3. Take Informed Action</span></p>
                <p className="mt-2">Receive evidence-based recommendations tailored to your body and circumstances</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-600">
                <p><span className="font-semibold text-purple-600 text-xl">4. Track Your Journey</span></p>
                <p className="mt-2">Monitor how interventions work for you and adjust as your body changes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our Founding Community
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              We're launching Eirvana in 2025 with 100 founding members who will help shape the future of personalized menopause care.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-lg mb-6 opacity-90">As a founding member, you'll get:</p>
              <ul className="text-lg space-y-3 text-left max-w-2xl mx-auto">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  Early access to the app before public launch
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  Lifetime discount on premium features
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  Direct input on features that matter most to you
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  A community of women navigating this journey together
                </li>
              </ul>
            </div>
            <Link href="/waitlist">
              <a className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Get Early Access
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Team
            </h2>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Paridhi Purohit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <img
                  src={paridhiImage}
                  alt="Paridhi Purohit"
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
                Paridhi Purohit
                <a
                  href="https://www.linkedin.com/in/paridhit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className="w-5 h-5 hover:opacity-80 cursor-pointer transition-opacity"
                  />
                </a>
              </h3>
              <p className="text-purple-600 font-medium mb-4">Co-Founder</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                A seasoned technology and engineering leader with more than 20 years of experience scaling global platforms and AI-enabled systems at Fortune 500 organizations. Paridhi brings deep expertise in product innovation, user-centric technology, and operational excellence, combined with lived experience navigating midlife health challenges while leading high-pressure technology teams.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">Paridhi's motivation to build Eirvana came from her own experience navigating unexplained symptoms while managing high-pressure technology projects. After years of being told "everything looks normal," she realized the healthcare system wasn't designed to see the whole picture—especially for women in midlife. She's committed to building technology that actually listens and connects the dots that traditional medicine often misses.
              </p>
            </motion.div>
            {/* Sushmita Saha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <img
                  src={sushmitaImage}
                  alt="Sushmita Saha"
                  className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
                Sushmita Saha
                <a
                  href="https://www.linkedin.com/in/sahasush/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className="w-5 h-5 hover:opacity-80 cursor-pointer transition-opacity"
                  />
                </a>
              </h3>
              <p className="text-purple-600 font-medium mb-4">Co-Founder</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experienced IT professional with 25+ years of expertise in software development, leadership, and project management. A proven record of designing scalable solutions, leading complex integrations, and using data to drive strategic outcomes. Combines technical depth with business insight to deliver measurable impact. Passionate about mentorship, empowering women in tech, and building technology that improves lives. Deep expertise in Identity and Access Management (IAM), with extensive experience delivering secure and efficient access solutions.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sushmita's journey with perimenopause symptoms while leading complex technical teams opened her eyes to how little support exists for women navigating this transition. As a data-driven problem solver, she saw an opportunity to apply technology not just to build another health app, but to create truly personalized insights that help women understand their unique biology. Her passion lies in making complex systems simple and accessible.
              </p>
            </motion.div>
            {/* Dr. Purva Tripathi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center text-6xl text-blue-600 font-bold shadow-lg">
                  PT
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center gap-2">
                Dr. Purva Tripathi
                <a
                  href="https://www.linkedin.com/in/dr-purva-tripathi-0198241b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className="w-5 h-5 hover:opacity-80 cursor-pointer transition-opacity"
                  />
                </a>
              </h3>
              <p className="text-purple-600 font-medium mb-4">DNB FRCR — Advisor</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                A consultant radiologist at Wye Valley NHS Trust (UK) with over six years of clinical experience specializing in women's imaging and pelvic diagnostics. Certified by the British Menopause Society in menopause management, she combines clinical precision with a deep understanding of women's health needs. As an advisor to Eirvana, Dr. Tripathi provides strategic guidance on medical integrity, evidence-based wellness frameworks, and the integration of clinical insights into scalable health solutions.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dr. Tripathi joined Eirvana's advisory board after seeing countless women dismissed or misdiagnosed during perimenopause in her clinical practice. She recognized that the convergence of AI, personalized medicine, and increased awareness of women's health could finally address this long-neglected area. Her role is ensuring Eirvana maintains the highest standards of medical accuracy while making insights accessible to every woman who needs them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              We're Building Our Team
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Eirvana is growing. We're looking for passionate clinicians, AI/ML engineers, and women's health advocates who want to reimagine menopause care. If you're excited about personalized health technology and think every woman deserves answers, not dismissals—let's talk.
            </p>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience personalized health support designed for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/login">
                <a className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                  Start Your Wellness Journey
                </a>
              </Link>
              <Link href="/waitlist">
                <a className="inline-block bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 hover:shadow-lg transition-all transform hover:scale-105">
                  Get Early Access
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/favicon.svg" alt="Eirvana" className="h-8 w-8" />
                <span className="text-2xl font-bold">Eirvana</span>
              </div>
              <p className="text-gray-400">
                Vibrant living for aging women
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/">
                  <a className="block text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="block text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </Link>
                <Link href="/chat">
                  <a className="block text-gray-400 hover:text-white transition-colors">
                    Chat
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="/privacy">
                  <a className="block text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </Link>
                <Link href="/terms">
                  <a className="block text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eirvana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
