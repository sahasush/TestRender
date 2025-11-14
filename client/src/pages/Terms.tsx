import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">This is a placeholder Terms of Service page for Eirvana. Replace with your actual terms before publishing.</p>

        <section className="prose prose-gray max-w-none mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">By using Eirvana you agree to these terms. Please read them carefully.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
          <p className="text-gray-700 leading-relaxed">Eirvana provides AI-driven symptom tracking and insights. Availability and features may change.</p>
        </section>

        <p className="text-sm text-muted-foreground">For full details, replace this placeholder with legally reviewed terms.</p>

        <div className="mt-8">
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
