import React from 'react';

export default function ResumeResults() {
  return (
    <section className="mb-20">
      <div className="bg-slate-900 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Resume Analysis Results</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">ATS Score</h3>

            <p className="text-4xl font-bold text-green-400">82%</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Skills Found</h3>

            <ul className="text-slate-300 space-y-1">
              <li>Python</li>
              <li>FastAPI</li>
              <li>React</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Feedback</h3>

            <ul className="text-slate-300 space-y-1">
              <li>Add measurable achievements</li>
              <li>Improve project descriptions</li>
              <li>Include GitHub profile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
