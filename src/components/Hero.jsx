import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';
import profileImage from '../assets/hero/me.png';
import Mode from './Mode';
import ParticleBackground from './ParticleBackground';
import { useTypingEffect } from '../hooks/useTypingEffect';

const typingTexts = {
  tr: ['Full-Stack Geliştirici', 'React Uzmanı', 'UI/UX Meraklısı', 'Yaratıcı Çözümler'],
  en: ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Creative Solutions'],
};

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const typedText = useTypingEffect(typingTexts[language]);
  const hero = data[language].heroData;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0c29]">
      <ParticleBackground />

      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <Mode />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500 rounded-full blur-[120px] opacity-15 animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-28 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* Left — text */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {language === 'tr' ? 'Projelere Açık' : 'Open to Projects'}
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white leading-tight tracking-tight">
              {hero.name}
            </h1>

            {/* Typing role */}
            <div className="h-12 flex items-center justify-center md:justify-start mb-6">
              <span className="text-2xl md:text-3xl font-semibold text-gradient-purple-amber">
                {typedText}
              </span>
              <span className="ml-1 text-2xl text-amber-400 animate-blink font-thin">|</span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg">
              {hero.description}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={hero.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/20 text-white rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:border-white/40 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href={hero.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={hero.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {hero.cvLabel}
              </a>
            </div>
          </div>

          {/* Right — profile image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-amber-400 blur-3xl opacity-40 scale-110 animate-spin-slow" />

              {/* Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-2 border-white/20 shadow-2xl z-10 animate-glow-pulse">
                <img
                  src={profileImage}
                  alt="Atilla Köz"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-2 -left-10 z-20 flex items-center gap-2 px-4 py-2 glass border border-white/20 rounded-xl text-white text-sm font-medium shadow-xl animate-float">
                ⚡ React / Next.js
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-2 -right-6 z-20 flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-xl text-amber-300 text-sm font-medium shadow-xl animate-float-delayed">
                🎨 UI / UX
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30 text-xs tracking-widest uppercase animate-bounce">
        <span>scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
