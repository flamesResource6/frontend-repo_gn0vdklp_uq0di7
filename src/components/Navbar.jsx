import { Menu, Brain, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 grid place-items-center shadow-lg shadow-blue-500/30 overflow-hidden">
              <div aria-hidden className="absolute inset-0 bg-gradient-animate opacity-40" />
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Study AI</span>
            <span className="ml-3 hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">
              <Sparkles className="h-3.5 w-3.5" />
              Beta
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#tools">Tools</a>
            <a className="hover:text-white transition" href="#cta">Get Started</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="group hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-white text-black hover:bg-white/90 transition">
              <span>Sign in</span>
            </button>
            <button className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-md border border-white/10 text-white/80 hover:text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
