export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          AI Career Copilot
        </h1>

        <div className="flex gap-6">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
}
