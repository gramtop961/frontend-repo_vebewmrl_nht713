export default function CTA() {
  return (
    <section id="demo" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ready to elevate your fleet reliability?
          </h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Get a personalized walkthrough of AeroQOL and see how we reduce AOG time and increase on-time performance.
          </p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition">
              Schedule your demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
