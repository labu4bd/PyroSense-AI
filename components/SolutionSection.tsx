
import React from 'react';
import { SatelliteIcon, RadarIcon, CloudLightningIcon } from './icons/DataIcons.tsx';

const SectionTitle: React.FC<{ number: string; title: string }> = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-lightest-slate flex items-center mb-12 whitespace-nowrap">
        <span className="text-brand-teal font-mono text-xl md:text-2xl mr-4">0{number}.</span>
        {title}
        <span className="block h-px w-full md:w-64 bg-brand-light-navy ml-4"></span>
    </h2>
);

const DataCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-light-navy p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
        <div className="text-brand-teal mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-brand-lightest-slate mb-2">{title}</h3>
        <p className="text-brand-slate">{description}</p>
    </div>
);

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24">
      <SectionTitle number="2" title="Our Intelligent Platform" />
      <div className="mb-16">
          <p className="text-lg text-brand-slate max-w-4xl mx-auto text-center">
            PyroSense AI is an intelligent wildfire risk forecasting and early warning platform. It integrates multiple downstream space data sources, fused by our AI engine to generate 48-hour risk maps and real-time ignition alerts.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DataCard
          icon={<SatelliteIcon />}
          title="Earth Observation"
          description="We use Sentinel-2 & Landsat data to monitor vegetation moisture, health, and fuel load, identifying high-risk zones before a fire can start."
        />
        <DataCard
          icon={<RadarIcon />}
          title="SAR Data"
          description="Sentinel-1 SAR data provides 24/7, all-weather fire progression tracking and ground deformation analysis, seeing through smoke and darkness."
        />
        <DataCard
          icon={<CloudLightningIcon />}
          title="Meteo & GNSS Data"
          description="We integrate GNSS and meteorological data to track critical factors like wind patterns and lightning strikes, key triggers for wildfire ignition and spread."
        />
      </div>
    </section>
  );
};

export default SolutionSection;