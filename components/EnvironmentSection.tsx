
import React from 'react';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-lightest-slate flex items-center mb-12 whitespace-nowrap">
        <span className="text-brand-teal font-mono text-xl md:text-2xl mr-4">0{number}.</span>
        {title}
        <span className="block h-px w-full md:w-64 bg-brand-light-navy ml-4"></span>
    </h2>
);

const EnvironmentSection: React.FC = () => {
  return (
    <section id="impact" className="py-24">
      <SectionTitle number="4" title="Environmental Impact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-brand-slate text-lg space-y-4">
            <h3 className="text-2xl font-bold text-brand-lightest-slate mb-4">Enhancing Environmental Monitoring Efforts</h3>
            <p>
                Our service fundamentally enhances environmental monitoring. We transform raw satellite data into actionable intelligence for tracking wildfire risks—a critical climate change indicator. 
            </p>
            <p>
                We provide continuous, wide-area monitoring of forest health, air quality impacts from smoke, and post-fire ecosystem damage. This delivers superior accuracy, coverage, and transparency for environmental indicators, directly supporting EU regulations like CSRD and helping to protect biodiversity and vital carbon sinks.
            </p>
        </div>
        <div>
            <img 
                src="https://picsum.photos/seed/greenearth/600/400" 
                alt="Lush green forest from above" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
