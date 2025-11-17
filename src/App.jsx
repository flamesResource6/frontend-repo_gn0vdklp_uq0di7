import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tools from './components/Tools';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Tools />
        <CTA />
      </main>
      <footer className="bg-black border-t border-white/10 py-8 text-center text-white/60 text-sm">
        Built with love for learners • Study AI
      </footer>
    </div>
  );
}

export default App;
