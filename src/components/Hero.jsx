import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';
import profileImage from '../assets/hero/me.png';
import Mode from './Mode';

export default function Hero() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="hero" className="relative bg-gradient-to-b from-white via-purple-50/50 to-white dark:from-dark dark:via-purple-900/5 dark:to-dark py-20 overflow-hidden">
      {/* Mode ve Dil Değiştirme Butonları */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <Mode />
      </div>

      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Sol Taraf - Metin İçeriği */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-customPurple to-customPurple1 dark:from-purple-400 dark:to-purple-600">
                {data[language].heroData.title}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {data[language].heroData.description}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={data[language].socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-customPurple text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href={data[language].socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-customPurple1 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={data[language].socialLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'en' ? 'Resume' : 'CV'}
              </a>
            </div>
          </div>

          {/* Sağ Taraf - Fotoğraf */}
          <div className="w-full md:w-1/2">
            <div className="relative mx-auto w-64 h-[400px] md:w-96 md:h-[500px] lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-customPurple to-customPurple1 rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
