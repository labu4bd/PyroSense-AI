
import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 text-center text-brand-slate bg-brand-navy">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-8">
                <Logo className="w-12 h-12" />
                <span className="text-2xl font-bold text-brand-teal font-mono">
                    PyroSense AI
                </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-lightest-slate mb-4">Get In Touch</h2>
            <p className="max-w-xl mx-auto mb-8">
                We are always looking for new partners and clients to work with. If you're interested in learning more about our platform or exploring a collaboration, we'd love to hear from you.
            </p>
            <a
                href="mailto:contact@pyrosense.ai"
                className="text-brand-teal border border-brand-teal rounded px-8 py-4 font-mono text-lg hover:bg-brand-teal/10 transition-colors duration-300"
            >
                Contact Us
            </a>
            <div className="mt-16 text-sm font-mono">
                <p>Designed & Built by a world-class AI engineer</p>
                <p className="mt-2">&copy; {new Date().getFullYear()} PyroSense AI. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
