import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Literary from './components/Literary';
import Connect from './components/Connect';
import Activities from './components/Activities';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 leading-relaxed font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Literary />
        <Activities />
        <Connect />
      </main>
    </div>
  );
};

export default App;