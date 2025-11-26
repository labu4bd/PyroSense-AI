
import React from 'react';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-lightest-slate flex items-center mb-12 whitespace-nowrap">
        <span className="text-brand-teal font-mono text-xl md:text-2xl mr-4">0{number}.</span>
        {title}
        <span className="block h-px w-full md:w-64 bg-brand-light-navy ml-4"></span>
    </h2>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24">
        <SectionTitle number="1" title="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-3 text-brand-slate text-lg space-y-4">
                <p>
                    PyroSense AI is at the forefront of leveraging space technology and artificial intelligence to combat one of the most pressing environmental challenges of our time: wildfires. Our mission is to transform wildfire management from a reactive to a proactive discipline.
                </p>
                <p>
                    We combine satellite imagery, SAR data, and advanced meteorological inputs with our proprietary AI models to provide highly accurate, 48-hour fire risk predictions and early detection alerts. 
                </p>
                <p>
                    Our platform empowers governments, insurance companies, and forestry managers with the critical intelligence needed to protect communities, preserve biodiversity, and safeguard economic assets from the escalating threat of devastating wildfires. We are committed to building a more resilient future for our planet.
                </p>
            </div>
            <div className="md:col-span-2 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-72 md:h-72 group">
                    <div className="absolute inset-0 rounded-lg border-2 border-brand-teal transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <div className="absolute inset-0 rounded-lg overflow-hidden">
                        <img 
                            src="https://picsum.photos/seed/satellitedish/400/400" 
                            alt="Satellite technology" 
                            className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                        />
                         <div className="absolute inset-0 bg-brand-navy/50 group-hover:bg-transparent transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;
