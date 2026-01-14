
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AboutSection from './components/AboutSection.tsx';
import SolutionSection from './components/SolutionSection.tsx';
import BenefitsSection from './components/BenefitsSection.tsx';
import EnvironmentSection from './components/EnvironmentSection.tsx';
import MapNotification from './components/MapNotification.tsx';
import TeamSection from './components/TeamSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-brand-deep-blue text-brand-slate font-sans leading-relaxed antialiased selection:bg-brand-teal selection:text-brand-deep-blue">
      <Header />
      <main className="container mx-auto px-6 md:px-10 lg:px-20">
        <Hero />
        <AboutSection />
        <SolutionSection />
        <MapNotification />
        <BenefitsSection />
        <EnvironmentSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
