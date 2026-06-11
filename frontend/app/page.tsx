import ResumeResults from "../components/ResumeResults";
import ResumeUpload from "../components/ResumeUpload";
import BackendStatus from "../components/BackendStatus";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <Stats />
        <Features />
        <BackendStatus />
        <ResumeUpload />
        <ResumeResults />
      </div>
    </main>
  );
}