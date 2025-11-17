import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#030712] via-[#0b1020] to-[#0b1020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030712]/20 via-[#0b1020]/40 to-[#0b1020]" />

      <div className="relative z-10 pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80">
              <Sparkles className="h-3.5 w-3.5" />
              AI that learns how you learn
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Your personal studying AI
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/70">
              Turn notes into mastery. Generate quizzes, flashcards, and study plans tailored to your pace. Visualize concepts with an interactive 3D brain at the core.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#tools" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium shadow shadow-blue-500/20 hover:bg-white/90">
                Try it now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10">
                Explore features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
