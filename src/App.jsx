import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/sections/Hero';
import About from './components/About/About';
import Experience from './components/Exper/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        <Hero />
        <About />
        <Experience />
        <Education />
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
