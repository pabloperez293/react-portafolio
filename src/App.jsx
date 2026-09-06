import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
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
   <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
  <Navbar />

  <main>
    <Hero />
    <About />
    <Experience />
    <Education />

    <section id="proyectos">
      <Projects />
    </section>

    <Contact />
  </main>

  <Footer />
</div>
  );
}
