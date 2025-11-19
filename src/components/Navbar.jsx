import { Menu, Plane } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-white/90 to-orange-400/80 text-slate-900">
                <Plane className="h-5 w-5" />
              </span>
              <span className="text-white text-lg font-semibold tracking-tight">AeroQOL</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
              <a href="#demo" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold shadow hover:shadow-lg transition">Request demo</a>
            </nav>
            <button className="md:hidden p-2 text-white/80" onClick={() => setOpen(!open)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-3">
                <a href="#features" className="text-slate-200">Features</a>
                <a href="#pricing" className="text-slate-200">Pricing</a>
                <a href="#contact" className="text-slate-200">Contact</a>
                <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold shadow">Request demo</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
