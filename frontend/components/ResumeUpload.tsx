"use client";

import { useState } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/upload-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setResumeText(data.resume_text);
      setSkills(data.skills);

      setMessage(
        `${data.message}: ${data.filename}`
      );
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <section className="mb-20">
      <div className="bg-slate-900 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">
          Resume Analyzer
        </h2>

        <p className="text-slate-400 mb-6">
          Upload your resume and get AI-powered feedback.
        </p>

        <input
          type="file"
          className="mb-4 block"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
        />

        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          Analyze Resume
        </button>

        {message && (
          <p className="mt-4 text-green-400">
            {message}
          </p>
        )}

        {resumeText && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Extracted Resume Text:</h3>
            <p className="text-slate-300">{resumeText}</p>
          </div>
        )}
        {skills.length > 0 && (
  <div className="mt-6">
    <h3 className="text-xl font-bold mb-2">
      Skills Found
    </h3>

    <ul className="list-disc list-inside text-slate-300">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
)}
      </div>
    </section>
  );
}