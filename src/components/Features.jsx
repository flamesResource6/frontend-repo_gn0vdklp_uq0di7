import { Brain, BookOpenCheck, Sparkles, LineChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Adaptive Learning',
    desc: 'Understands your strengths and gaps to personalize your path.'
  },
  {
    icon: BookOpenCheck,
    title: 'Smart Flashcards',
    desc: 'Automatically generates spaced-repetition flashcards from notes.'
  },
  {
    icon: Sparkles,
    title: 'Quiz Generation',
    desc: 'Create practice questions and explanations on any topic instantly.'
  },
  {
    icon: LineChart,
    title: 'Progress Insights',
    desc: 'Clear dashboards that show mastery by topic and difficulty.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Your study data stays yours with strong protections.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b1020] py-24">
      <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Built for deep, focused learning</h2>
          <p className="mt-3 text-white/70">Tools that help you retain more in less time.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition overflow-hidden">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 grid place-items-center overflow-hidden">
                  <div aria-hidden className="absolute inset-0 bg-gradient-animate opacity-40" />
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
