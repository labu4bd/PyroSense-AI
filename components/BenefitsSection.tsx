
import React from 'react';
import { GovernmentIcon, InsuranceIcon, ForestryIcon } from './icons/ClientIcons.tsx';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-lightest-slate flex items-center mb-12 whitespace-nowrap">
        <span className="text-brand-teal font-mono text-xl md:text-2xl mr-4">0{number}.</span>
        {title}
        <span className="block h-px w-full md:w-64 bg-brand-light-navy ml-4"></span>
    </h2>
);

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    points: string[];
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, points }) => (
    <div className="bg-transparent border border-brand-light-navy p-8 rounded-lg flex flex-col transition-all duration-300 hover:border-brand-teal hover:shadow-2xl hover:shadow-brand-teal/10">
        <div className="text-brand-teal mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-brand-lightest-slate mb-4">{title}</h3>
        <p className="text-brand-slate mb-6 flex-grow">{description}</p>
        <ul className="space-y-3">
            {points.map((point, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-brand-teal mr-3 mt-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-brand-light-slate">{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

const BenefitsSection: React.FC = () => {
    return (
        <section id="clients" className="py-24">
            <SectionTitle number="3" title="Transforming Wildfire Management" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <BenefitCard
                    icon={<GovernmentIcon />}
                    title="For Governments & Fire Services"
                    description="Shift from reactive response to proactive prevention and containment, saving lives and resources."
                    points={['Enable pre-positioning of resources', 'Cut emergency response times', 'Facilitate early & targeted evacuations', 'Enhance civil protection strategies']}
                />
                <BenefitCard
                    icon={<InsuranceIcon />}
                    title="For Insurance Companies"
                    description="Move from reactive claims handling to proactive risk prevention and dynamic portfolio management."
                    points={['Implement dynamic, risk-based pricing', 'Reduce catastrophic loss ratios', 'Proactively warn policyholders', 'Improve portfolio resilience']}
                />
                <BenefitCard
                    icon={<ForestryIcon />}
                    title="For Forestry Managers"
                    description="Gain unparalleled insights into forest health and fire risk to protect valuable natural assets."
                    points={['Implement targeted preventive measures', 'Optimize fuel load management', 'Protect critical habitats & carbon sinks', 'Monitor post-fire ecosystem recovery']}
                />
            </div>
        </section>
    );
};

export default BenefitsSection;