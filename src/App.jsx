import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} AeroQOL. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white">Terms</a>
            <a href="#contact" className="text-slate-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
