import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  tr: {
    welcome: 'Hoş Geldiniz',
    subtitle: 'Görsel Sanatçı & Yazılım Geliştirici',
    or: 'veya',
    photo: {
      eyebrow: 'Kişisel Portfolyo',
      title: 'Fotoğraf',
      sub: '& Film',
      tags: ['Fotoğraf', 'Reels', 'Doğa', 'Seyahat'],
      cta: 'Portfolyoya Gir',
    },
    software: {
      eyebrow: 'Full-Stack Mühendislik',
      title: 'Yazılım',
      sub: 'Portfolyo',
      tags: ['React', 'Java', 'TypeScript', 'Node.js'],
      cta: 'Portfolyoya Gir',
    },
  },
  en: {
    welcome: 'Welcome',
    subtitle: 'Visual Artist & Software Developer',
    or: 'or',
    photo: {
      eyebrow: 'Personal Portfolio',
      title: 'Photography',
      sub: '& Film',
      tags: ['Photos', 'Reels', 'Nature', 'Travel'],
      cta: 'Enter Portfolio',
    },
    software: {
      eyebrow: 'Full-Stack Engineering',
      title: 'Software',
      sub: 'Portfolio',
      tags: ['React', 'Java', 'TypeScript', 'Node.js'],
      cta: 'Enter Portfolio',
    },
  },
};

// ─── Detect initial language ──────────────────────────────────────────────────
function detectLang() {
  const saved = localStorage.getItem('lang');
  if (saved === 'tr' || saved === 'en') return saved;
  const browser = (navigator.language || '').toLowerCase();
  return browser.startsWith('tr') ? 'tr' : 'en';
}

function ApertureIcon({ color = '#c9a854' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1.2" opacity="0.6" />
      <circle cx="50" cy="50" r="20" stroke={color} strokeWidth="1.2" opacity="0.9" />
      {/* 6 aperture blades */}
      <path d="M50 50 L36 4 L64 4 Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
      <path d="M50 50 L36 4 L64 4 Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" transform="rotate(60 50 50)" />
      <path d="M50 50 L36 4 L64 4 Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" transform="rotate(120 50 50)" />
      <path d="M50 50 L36 4 L64 4 Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" transform="rotate(180 50 50)" />
      <path d="M50 50 L36 4 L64 4 Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" transform="rotate(240 50 50)" />
      <path d="M50 50 L36 4 L64 4 Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" transform="rotate(300 50 50)" />
      <circle cx="50" cy="50" r="8" fill={color} opacity="0.4" />
    </svg>
  );
}

function CodeIcon({ color = '#8b5cf6' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="8" y="16" width="84" height="68" rx="6" stroke={color} strokeWidth="1.2" opacity="0.5" />
      <rect x="8" y="16" width="84" height="16" rx="6" fill={color} opacity="0.08" />
      <circle cx="22" cy="24" r="3" fill={color} opacity="0.5" />
      <circle cx="33" cy="24" r="3" fill={color} opacity="0.3" />
      <circle cx="44" cy="24" r="3" fill={color} opacity="0.2" />
      {/* Code lines */}
      <path d="M24 52 L38 44 L24 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M44 52 L76 52" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M44 62 L66 62" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M44 72 L72 72" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

export default function Landing() {
  const history = useHistory();
  const [hovered, setHovered] = useState(null);
  const [lang, setLang] = useState(detectLang);
  const t = T[lang];

  // Persist language choice + sync html lang attribute
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const navigate = (path) => { history.push(path); };

  return (
    <div className="min-h-screen w-full bg-[#080808] flex flex-col select-none overflow-hidden">

      {/* TR/EN toggle — fixed top-right */}
      <div className="fixed top-5 right-5 z-50 flex items-center border border-[#2a2a2a] rounded-full overflow-hidden">
        <button
          onClick={() => setLang('tr')}
          className={`px-3 py-1.5 text-[10px] tracking-widest font-medium transition-all duration-300 ${lang === 'tr' ? 'bg-[#c9a854] text-black' : 'text-gray-500 hover:text-white'}`}
        >TR</button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 text-[10px] tracking-widest font-medium transition-all duration-300 ${lang === 'en' ? 'bg-[#c9a854] text-black' : 'text-gray-500 hover:text-white'}`}
        >EN</button>
      </div>

      {/* Header */}
      <header className="flex-shrink-0 pt-10 pb-6 text-center relative z-10">
        <p className="text-[10px] md:text-xs tracking-[0.5em] text-gray-600 uppercase mb-4">{t.welcome}</p>
        <div className="flex justify-center mb-1">
          <img
            src="https://res.cloudinary.com/djenodye6/image/upload/q_auto,f_auto/v1780050314/Generated_Image_May_29_2026_-_1_21PM_Arka_Plan%C4%B1_Silindi_qz35rj.png"
            alt="Atilla Köz Logo"
            className="h-28 md:h-36 w-auto"
          />
        </div>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a854]" />
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-gray-500 uppercase">
            {t.subtitle}
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#8b5cf6]" />
        </div>
      </header>

      {/* ─── MOBILE layout: two full-width tap cards ─── */}
      <main className="md:hidden flex-1 flex flex-col px-5 pb-5 gap-4 relative z-10">

        {/* Photography card */}
        <button
          onClick={() => navigate('/photo')}
          className="relative flex-1 rounded-2xl border border-[#c9a85430] overflow-hidden flex flex-col items-center justify-center gap-0 active:scale-[0.97] transition-transform duration-150 touch-manipulation"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-[#c9a854] blur-[80px] opacity-10 rounded-full" />
          </div>
          {/* Top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c9a85460] to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <div className="w-12 h-12 mb-4 opacity-80">
              <ApertureIcon color="#c9a854" />
            </div>
            <p className="text-[9px] tracking-[0.5em] text-[#c9a854] uppercase mb-2">
              {t.photo.eyebrow}
            </p>
            <h2 className="text-2xl font-thin tracking-widest uppercase text-white">
              {t.photo.title}
            </h2>
            <p className="text-base font-thin tracking-widest uppercase text-[#c9a854] mt-0.5">
              {t.photo.sub}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {t.photo.tags.map((tag) => (
                <span key={tag} className="text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#c9a85435] text-[#c9a854]/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Enter button */}
          <div className="relative z-10 mt-5 flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#c9a85450] bg-[#c9a85410]">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a854] font-medium">{t.photo.cta}</span>
            <span className="text-[#c9a854] text-sm">→</span>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c9a85430] to-transparent" />
        </button>

        {/* "or" divider */}
        <div className="flex items-center justify-center gap-3 flex-shrink-0">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
          <span className="text-[9px] tracking-widest text-gray-700 uppercase">{t.or}</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#2a2a2a] to-transparent" />
        </div>

        {/* Software card */}
        <button
          onClick={() => navigate('/software')}
          className="relative flex-1 rounded-2xl border border-violet-900/40 overflow-hidden flex flex-col items-center justify-center gap-0 active:scale-[0.97] transition-transform duration-150 touch-manipulation"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-violet-600 blur-[80px] opacity-10 rounded-full" />
          </div>
          {/* Top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-700/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <div className="w-12 h-12 mb-4 opacity-80">
              <CodeIcon color="#a78bfa" />
            </div>
            <p className="text-[9px] tracking-[0.5em] text-violet-400 uppercase mb-2">
              {t.software.eyebrow}
            </p>
            <h2 className="text-2xl font-thin tracking-widest uppercase text-white">
              {t.software.title}
            </h2>
            <p className="text-base font-thin tracking-widest uppercase text-violet-400 mt-0.5">
              {t.software.sub}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {t.software.tags.map((tag) => (
                <span key={tag} className="text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-violet-800/40 text-violet-400/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Enter button */}
          <div className="relative z-10 mt-5 flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-700/40 bg-violet-900/10">
            <span className="text-[10px] tracking-[0.4em] uppercase text-violet-400 font-medium">{t.software.cta}</span>
            <span className="text-violet-400 text-sm">→</span>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-800/30 to-transparent" />
        </button>
      </main>

      {/* ─── DESKTOP layout: original side-by-side panels (unchanged) ─── */}
      <main className="hidden md:flex flex-1 flex-row relative z-10 min-h-0">

        {/* Photography & Film */}
        <div
          className={`relative flex-1 flex flex-col items-center justify-center cursor-pointer overflow-hidden
            transition-all duration-700 ease-out
            ${hovered === 'software' ? 'opacity-40 flex-[0.6]' : ''}
            ${hovered === 'photo' ? 'flex-[1.4]' : ''}
            ${hovered === null ? 'flex-1' : ''}
          `}
          onMouseEnter={() => setHovered('photo')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => navigate('/photo')}
        >
          <div className={`absolute inset-0 transition-opacity duration-700 ${hovered === 'photo' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#c9a854] blur-[100px] opacity-15 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#b8860b] blur-[80px] opacity-10 rounded-full" />
          </div>
          <div className={`absolute inset-0 border-r border-[#2a2a2a] transition-colors duration-700 ${hovered === 'photo' ? 'border-r-[#c9a85420]' : ''}`} />
          <div className="relative z-10 flex flex-col items-center text-center px-12 max-w-sm">
            <div className={`w-20 h-20 mb-8 transition-all duration-500 ${hovered === 'photo' ? 'scale-110 opacity-100' : 'opacity-50'}`}>
              <ApertureIcon color={hovered === 'photo' ? '#c9a854' : '#6b5a30'} />
            </div>
            <p className={`text-[10px] tracking-[0.5em] uppercase mb-3 transition-colors duration-500 ${hovered === 'photo' ? 'text-[#c9a854]' : 'text-gray-600'}`}>
              {t.photo.eyebrow}
            </p>
            <h2 className={`text-3xl font-thin tracking-widest uppercase transition-colors duration-500 ${hovered === 'photo' ? 'text-white' : 'text-gray-400'}`}>
              {t.photo.title}
            </h2>
            <p className={`text-xl font-thin tracking-widest uppercase mt-1 transition-colors duration-500 ${hovered === 'photo' ? 'text-[#c9a854]' : 'text-gray-600'}`}>
              {t.photo.sub}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {t.photo.tags.map((tag) => (
                <span key={tag} className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border transition-all duration-500 ${hovered === 'photo' ? 'border-[#c9a85450] text-[#c9a854] bg-[#c9a85408]' : 'border-[#2a2a2a] text-gray-600'}`}>{tag}</span>
              ))}
            </div>
            <div className={`mt-10 flex items-center gap-3 text-xs tracking-[0.4em] uppercase transition-all duration-500 ${hovered === 'photo' ? 'text-[#c9a854]' : 'text-gray-700'}`}>
              <span>{t.photo.cta}</span>
              <span className={`transition-transform duration-300 ${hovered === 'photo' ? 'translate-x-2' : ''}`}>→</span>
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="flex flex-col items-center justify-center w-px relative flex-shrink-0">
          <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent" />
          <div className={`my-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${hovered ? 'border-gray-700 bg-[#0f0f0f]' : 'border-[#1f1f1f] bg-[#0a0a0a]'}`}>
            <span className="text-[9px] tracking-widest text-gray-700 uppercase">{t.or}</span>
          </div>
          <div className="flex-1 w-px bg-gradient-to-b from-transparent via-[#2a2a2a] to-transparent" />
        </div>

        {/* Software Development */}
        <div
          className={`relative flex-1 flex flex-col items-center justify-center cursor-pointer overflow-hidden
            transition-all duration-700 ease-out
            ${hovered === 'photo' ? 'opacity-40 flex-[0.6]' : ''}
            ${hovered === 'software' ? 'flex-[1.4]' : ''}
            ${hovered === null ? 'flex-1' : ''}
          `}
          onMouseEnter={() => setHovered('software')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => navigate('/software')}
        >
          <div className={`absolute inset-0 transition-opacity duration-700 ${hovered === 'software' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-violet-600 blur-[100px] opacity-15 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-700 blur-[80px] opacity-10 rounded-full" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center px-12 max-w-sm">
            <div className={`w-20 h-20 mb-8 transition-all duration-500 ${hovered === 'software' ? 'scale-110 opacity-100' : 'opacity-50'}`}>
              <CodeIcon color={hovered === 'software' ? '#a78bfa' : '#4a3a7a'} />
            </div>
            <p className={`text-[10px] tracking-[0.5em] uppercase mb-3 transition-colors duration-500 ${hovered === 'software' ? 'text-violet-400' : 'text-gray-600'}`}>
              {t.software.eyebrow}
            </p>
            <h2 className={`text-3xl font-thin tracking-widest uppercase transition-colors duration-500 ${hovered === 'software' ? 'text-white' : 'text-gray-400'}`}>
              {t.software.title}
            </h2>
            <p className={`text-xl font-thin tracking-widest uppercase mt-1 transition-colors duration-500 ${hovered === 'software' ? 'text-violet-400' : 'text-gray-600'}`}>
              {t.software.sub}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {t.software.tags.map((tag) => (
                <span key={tag} className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border transition-all duration-500 ${hovered === 'software' ? 'border-violet-500/40 text-violet-300 bg-violet-900/10' : 'border-[#2a2a2a] text-gray-600'}`}>{tag}</span>
              ))}
            </div>
            <div className={`mt-10 flex items-center gap-3 text-xs tracking-[0.4em] uppercase transition-all duration-500 ${hovered === 'software' ? 'text-violet-400' : 'text-gray-700'}`}>
              <span>{t.software.cta}</span>
              <span className={`transition-transform duration-300 ${hovered === 'software' ? 'translate-x-2' : ''}`}>→</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0 py-6 text-center relative z-10">
        <p className="text-[9px] tracking-[0.4em] text-gray-700 uppercase">atillakoz.com</p>
      </footer>
    </div>
  );
}
