import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-40 pb-24 sm:pt-44 sm:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
              Live fleet health snapshot
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Airline fleet management, reimagined
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-slate-200/90">
              AeroQOL centralizes aircraft operations, maintenance, and compliance in one modern workspace. Reduce downtime, optimize utilization, and elevate on-time performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition">
                Book a demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
    </section>
  );
}
