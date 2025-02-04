import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-white dark:bg-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {data[language].footerData.title}
          </h2>
          <a
            href={`mailto:${data[language].footerData.email}`}
            className="text-xl text-customPurple1 dark:text-purple-400 hover:text-customPurple dark:hover:text-purple-300 transition-colors duration-300"
          >
            {data[language].footerData.email}
          </a>
          <div className="flex justify-center gap-6 mt-8">
            {data[language].footerData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-customPurple1 dark:hover:text-purple-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
