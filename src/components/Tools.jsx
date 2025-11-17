import { Upload, FileText, Sparkles, Layers, Wand2 } from 'lucide-react';

export default function Tools() {
  return (
    <section id="tools" className="relative bg-[#0b1020] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">From notes to mastery</h2>
            <p className="mt-3 text-white/70">Drop your notes, get instant study materials.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center border border-white/10"><Upload className="h-5 w-5 text-white"/></div>
                <div>
                  <p className="text-white font-medium">Upload sources</p>
                  <p className="text-white/70 text-sm">PDFs, slides, or text</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center border border-white/10"><FileText className="h-5 w-5 text-white"/></div>
                <div>
                  <p className="text-white font-medium">Summarize</p>
                  <p className="text-white/70 text-sm">Crystal-clear notes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center border border-white/10"><Sparkles className="h-5 w-5 text-white"/></div>
                <div>
                  <p className="text-white font-medium">Generate quizzes</p>
                  <p className="text-white/70 text-sm">MCQs and explanations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center border border-white/10"><Layers className="h-5 w-5 text-white"/></div>
                <div>
                  <p className="text-white font-medium">Flashcards</p>
                  <p className="text-white/70 text-sm">Spaced repetition</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="rounded-xl border border-white/10 bg-[#0f162e] p-4">
              <div className="flex items-center gap-2 text-white/80 text-sm"><Wand2 className="h-4 w-4"/> Demo: paste text to generate questions</div>
              <textarea className="mt-3 w-full h-40 rounded-md bg-black/30 text-white p-3 border border-white/10 outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Paste a concept... e.g., Neurons transmit information via electrical impulses..." />
              <button className="mt-3 inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Generate questions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
