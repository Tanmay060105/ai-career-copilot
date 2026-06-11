export default function Stats() {
  return (
    <section className="grid md:grid-cols-3 gap-6 mb-20">
      <div className="bg-slate-900 p-6 rounded-xl text-center">
        <h2 className="text-4xl font-bold text-blue-400">500+</h2>
        <p className="text-slate-400 mt-2">
          Students Supported
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl text-center">
        <h2 className="text-4xl font-bold text-blue-400">95%</h2>
        <p className="text-slate-400 mt-2">
          ATS Optimization Accuracy
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl text-center">
        <h2 className="text-4xl font-bold text-blue-400">1000+</h2>
        <p className="text-slate-400 mt-2">
          Interview Questions Generated
        </p>
      </div>
    </section>
  );
}
