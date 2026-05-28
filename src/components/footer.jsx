import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const footer = data[language].footerData;

  return (
    <footer className="relative bg-[#0a0612] dark:bg-[#050308] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-600 rounded-full blur-[80px] opacity-15" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">

        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {footer.title}
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-amber-400 rounded-full mx-auto mt-4 mb-6" />
          <a
            href={`mailto:${footer.email}`}
            className="inline-flex items-center gap-2 text-lg text-violet-400 hover:text-amber-400 transition-colors duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {footer.email}
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-800/40 to-transparent mb-10" />

        {/* Links + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-6">
            {footer.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-violet-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Atilla Köz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
