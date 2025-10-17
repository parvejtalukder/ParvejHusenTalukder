import React from 'react';
// Fix: Corrected import paths to be relative.
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProgrammingStats from './components/ProgrammingStats';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Honors from './components/Honors';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleNavigate = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // A more robust way to handle smooth scrolling, especially for hash links
      // This is a simple implementation. For complex layouts, a library might be better.
      const offsetTop = (element as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for sticky header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-base-100 text-base-content" data-theme="night">
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero />
        <About />
        <ProgrammingStats />
        <Skills />
        <Projects />
        <Honors />
        <Experience />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;