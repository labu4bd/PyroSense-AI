
import React from 'react';
/** 
const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-lightest-slate flex items-center mb-12 whitespace-nowrap">
        <span className="text-brand-teal font-mono text-xl md:text-2xl mr-4">0{number}.</span>
        {title}
        <span className="block h-px w-full md:w-64 bg-brand-light-navy ml-4"></span>
    </h2>
);
*/

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-24 text-center">
            <div className="max-w-2xl mx-auto">
                <img 
                    src="https://picsum.photos/seed/ceophoto/200/200" 
                    alt="Md Nur Alam Labu"
                    className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-brand-light-navy"
                />
                <h3 className="text-3xl font-bold text-brand-lightest-slate">Md Nur Alam Labu</h3>
                <p className="text-brand-teal text-lg font-mono mb-4">CEO & Founder, PyroSense AI</p>
                <blockquote className="text-brand-slate text-xl italic leading-relaxed">
                    "At PyroSense AI, we are driven by a single, powerful vision: to harness the most advanced technology to protect our planet and its people from the growing threat of wildfires. We believe in a future where foresight triumphs over disaster."
                </blockquote>
            </div>
        </section>
    );
};

export default TeamSection;
