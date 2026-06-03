import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  tr: {
    eyebrow: 'Ticari & Kurumsal',
    title: 'Prodüksiyon',
    sub: 'Müşteri projeleri — kurumsal videolar, etkinlik çekimleri ve drone görüntüleri.',
    backPhoto: '← Kişisel Portfolyo',
    backHome: 'Ana Sayfa',
    filterAll: 'Tümü',
    videoSection: 'Video Prodüksiyon',
    photoSection: 'Fotoğraf Prodüksiyon',
    comingSoon: 'Yakında eklenecek',
    categories: {
      extreme: 'Ekstrem Spor',
      event: 'Etkinlik',
      venue: 'Mekan Tanıtımı',
    },
  },
  en: {
    eyebrow: 'Commercial & Corporate',
    title: 'Production',
    sub: 'Client projects — corporate videos, event shoots and drone footage.',
    backPhoto: '← Personal Portfolio',
    backHome: 'Home',
    filterAll: 'All',
    videoSection: 'Video Production',
    photoSection: 'Photo Production',
    comingSoon: 'Coming soon',
    categories: {
      extreme: 'Extreme Sports',
      event: 'Event',
      venue: 'Venue Promo',
    },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const videoItems = [
  {
    id: 'OZpz3yttH_M',
    titleTr: 'Ekstrem Spor — Canyoning',
    titleEn: 'Extreme Sports — Canyoning',
    category: 'extreme',
  },
  {
    id: 'tspOAGk6viU',
    titleTr: 'Ağrı Tanıtım Günleri Fuarı',
    titleEn: 'Ağrı Promotion Days Fair',
    category: 'event',
  },
  {
    id: '3j7j18LOCn8',
    titleTr: 'Mekan Açılışı — Drone',
    titleEn: 'Venue Opening — Drone',
    category: 'venue',
  },
  {
    id: 'M1QjhPH7mFU',
    titleTr: 'Mekan Tanıtımı',
    titleEn: 'Venue Promotion',
    category: 'venue',
  },
  {
    id: 'mFId0sG_SoM',
    titleTr: 'Amos Antik Kenti — Drone',
    titleEn: 'Amos Ancient City — Drone',
    category: 'venue',
  },
  {
    id: 'DSdDeC694_o',
    titleTr: 'Marmaris Taşlıca — Drone',
    titleEn: 'Marmaris Taşlıca — Drone',
    category: 'venue',
  },
  {
    id: 'bDW6Z8KPtmw',
    titleTr: 'Spil Dağı — Sülüklü Göl & Yarıkkaya Kanyonu',
    titleEn: 'Spil Mountain — Leech Lake & Yarıkkaya Canyon',
    category: 'extreme',
  },
];

const LOGO =
  'https://res.cloudinary.com/djenodye6/image/upload/q_auto,f_auto/v1780050314/Generated_Image_May_29_2026_-_1_21PM_Arka_Plan%C4%B1_Silindi_qz35rj.png';

// ─── Component ────────────────────────────────────────────────────────────────
function detectLang() {
  const saved = localStorage.getItem('lang');
  if (saved === 'tr' || saved === 'en') return saved;
  return (navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

export default function ProfessionalWorks() {
  const [lang, setLang] = useState(detectLang);
  const [activeFilter, setActiveFilter] = useState('all');
  const t = T[lang];
  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);

  const filters = [
    { key: 'all',     label: t.filterAll },
    { key: 'extreme', label: t.categories.extreme },
    { key: 'event',   label: t.categories.event },
    { key: 'venue',   label: t.categories.venue },
  ];

  const filtered =
    activeFilter === 'all'
      ? videoItems
      : videoItems.filter((v) => v.category === activeFilter);

  return (
    <div className="bg-[#080808] text-[#f0f0f0] min-h-screen">

      {/* ── Header ────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#080808]/80 backdrop-blur-md border-b border-[#ffffff08]">
        {/* Logo */}
        <Link to="/photo" className="flex items-center group">
          <img
            src={LOGO}
            alt="Atilla Köz Logo"
            className="h-14 w-auto transition-all duration-300 group-hover:opacity-75 group-hover:scale-105"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Back to photo portfolio */}
          <Link
            to="/photo"
            className="hidden sm:flex items-center gap-1.5 text-[10px] tracking-widest text-gray-500 uppercase hover:text-[#c9a854] transition-colors duration-300"
          >
            {t.backPhoto}
          </Link>

          {/* TR / EN toggle */}
          <div className="flex items-center border border-[#2a2a2a] rounded-full overflow-hidden">
            <button
              onClick={() => setLang('tr')}
              className={`px-3 py-1.5 text-[10px] tracking-widest font-medium transition-all duration-300 ${
                lang === 'tr' ? 'bg-[#c9a854] text-black' : 'text-gray-500 hover:text-white'
              }`}
            >TR</button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[10px] tracking-widest font-medium transition-all duration-300 ${
                lang === 'en' ? 'bg-[#c9a854] text-black' : 'text-gray-500 hover:text-white'
              }`}
            >EN</button>
          </div>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c9a854] blur-[160px] opacity-[0.04] rounded-full" />
        </div>
        <p className="text-[10px] tracking-[0.6em] text-[#c9a854] uppercase mb-4">
          {t.eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-thin tracking-[0.2em] text-white uppercase mb-4">
          {t.title}
        </h1>
        <p className="text-sm text-gray-500 tracking-widest max-w-md mx-auto">
          {t.sub}
        </p>
        <div className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#c9a854] to-transparent mx-auto" />
      </section>

      {/* ── Videos ────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 pb-24">

        {/* Section title */}
        <div className="flex items-center gap-4 mb-8">
          <p className="text-[10px] tracking-[0.5em] text-[#c9a854] uppercase">{t.videoSection}</p>
          <div className="flex-1 h-px bg-gradient-to-r from-[#c9a85430] to-transparent" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase border transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-[#c9a854] border-[#c9a854] text-black font-semibold'
                  : 'border-[#2a2a2a] text-gray-500 hover:border-[#c9a85450] hover:text-[#c9a854]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Video grid — 9:16 shorts cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((video) => (
            <div key={video.id} className="flex flex-col gap-3 group">
              {/* Video embed — 9:16 */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#111]"
                   style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={lang === 'tr' ? video.titleTr : video.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/* Meta */}
              <div className="px-1">
                <span className="inline-block text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full border border-[#c9a85430] text-[#c9a854]/70 mb-1.5">
                  {t.categories[video.category]}
                </span>
                <p className="text-xs text-gray-300 font-light leading-snug">
                  {lang === 'tr' ? video.titleTr : video.titleEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Photo works — coming soon ──────────────────────────── */}
      <section className="px-6 md:px-12 pb-24">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-[10px] tracking-[0.5em] text-gray-600 uppercase">{t.photoSection}</p>
          <div className="flex-1 h-px bg-gradient-to-r from-[#2a2a2a] to-transparent" />
        </div>

        <div className="rounded-2xl border border-dashed border-[#2a2a2a] py-16 flex flex-col items-center justify-center gap-3">
          <svg className="w-8 h-8 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-[10px] tracking-[0.4em] text-gray-700 uppercase">{t.comingSoon}</p>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="py-8 text-center border-t border-[#111]">
        <p className="text-[9px] tracking-[0.4em] text-gray-700 uppercase">atillakoz.com</p>
      </footer>
    </div>
  );
}
