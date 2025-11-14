import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">This is a placeholder Privacy Policy for Eirvana. Replace with your real policy copy before publishing.</p>

        <section className="prose prose-gray max-w-none mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-6">We collect data you provide during conversations to offer personalized insights. Data is stored securely and never shared without consent.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
          <p className="text-gray-700 leading-relaxed">Data is used to generate insights, improve the service, and provide you with a personalized experience.</p>
        </section>

        <p className="text-sm text-muted-foreground">For full details, replace this placeholder with your legal team's policy.</p>

        <div className="mt-8">
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </div>
  );
}
