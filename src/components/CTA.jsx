import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-[#0b1020] to-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Start your smarter study session</h3>
          <p className="mt-3 text-white/70">No sign-up required. Try it with your own notes.</p>
          <div className="mt-6 flex justify-center">
            <a href="#tools" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">
              Launch the demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
