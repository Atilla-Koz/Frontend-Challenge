import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="relative bg-gradient-to-b from-white to-purple-50 dark:from-dark dark:to-gray-900 pt-20 pb-10 overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/30 to-blue-200/30 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-customPurple to-customPurple1 dark:from-purple-400 dark:to-purple-600">
              {data[language].footerData.title}
            </span>
          </h2>

          <a
            href={`mailto:${data[language].footerData.email}`}
            className="group inline-flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400 hover:text-customPurple1 dark:hover:text-purple-400 transition-colors duration-300 mb-12"
          >
            <svg
              className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {data[language].footerData.email}
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            {data[language].footerData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 text-sm font-medium">
                  {link.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Atilla Köz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
