
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start relative -mx-6 md:-mx-10 lg:-mx-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep-blue via-brand-deep-blue/80 to-transparent"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{backgroundImage: "url('https://picsum.photos/seed/wildfiretech/1920/1080')"}}
      ></div>
      <div className="relative z-10 px-6 md:px-10 lg:px-20">
        <h1 className="text-brand-teal text-lg font-mono mb-4">Welcome to PyroSense AI.</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-lightest-slate mb-4">
          Forecasting Wildfires.
        </h2>
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-slate mb-8">
          Protecting Futures.
        </h3>
        <p className="max-w-xl text-lg text-brand-slate mb-12">
          We develop an intelligent wildfire risk forecasting platform using Earth Observation data to protect communities, biodiversity, and economic assets from devastating wildfires.
        </p>
        <div>
          <a
            href="#solution"
            className="text-brand-teal border border-brand-teal rounded px-8 py-4 font-mono text-lg hover:bg-brand-teal/10 transition-colors duration-300"
          >
            Discover Our Solution
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
