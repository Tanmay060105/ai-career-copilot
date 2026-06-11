export default function Features() {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Core Features
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-2">
            Resume Analysis
          </h3>
          <p className="text-slate-400">
            Receive detailed AI-powered feedback on your resume.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-2">
            ATS Score Prediction
          </h3>
          <p className="text-slate-400">
            Improve recruiter visibility with ATS optimization.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-2">
            Job Matching
          </h3>
          <p className="text-slate-400">
            Match your profile against real job descriptions.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-2">
            Interview Preparation
          </h3>
          <p className="text-slate-400">
            Generate personalized interview practice questions.
          </p>
        </div>
      </div>
    </section>
  );
}