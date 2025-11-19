import { Wrench, Radar, Clock, Shield, BarChart3, Map } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Predictive maintenance",
    desc: "Sensor-driven alerts, work orders, and parts tracking to keep aircraft online.",
  },
  {
    icon: Radar,
    title: "Real-time ops",
    desc: "Live aircraft status, ETAs, and disruption workflows across your network.",
  },
  { icon: Clock, title: "Turn-time optimizer", desc: "AI-assisted Gantt to compress ground operations and reduce delays." },
  { icon: Shield, title: "Compliance vault", desc: "Airworthiness directives, audits, and approvals with full traceability." },
  { icon: BarChart3, title: "Performance analytics", desc: "Utilization, on-time performance, and cost views for leaders." },
  { icon: Map, title: "Fleet planning", desc: "Scenario models for capacity, leases, and route deployment." },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built for airline operations teams
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Everything you need to run a reliable, efficient fleet — from line maintenance to leadership.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 hover:border-white/20 transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
