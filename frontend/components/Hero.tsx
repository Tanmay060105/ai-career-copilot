export default function Hero() {
  return (
    <section className="py-24 text-center">
      <p className="text-blue-400 font-semibold mb-4">
        AI-Powered Career Growth Platform
      </p>

      <h1 className="text-6xl font-bold mb-6">
        Land Your Dream Internship
        <br />
        And Job Faster
      </h1>

      <p className="max-w-3xl mx-auto text-xl text-slate-300 mb-10">
        Analyze resumes, improve ATS scores, prepare for interviews,
        discover skill gaps, and accelerate your career journey with AI.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>

        <button className="border border-slate-600 px-6 py-3 rounded-lg font-semibold">
          View Features
        </button>
      </div>
    </section>
  );
}
