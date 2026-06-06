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
  {
    id: 'bnQVVPRcnl4',
    titleTr: 'Florya Padel Akademisi — Drone',
    titleEn: 'Florya Padel Academy — Drone',
    category: 'venue',
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
  const [playingId, setPlayingId] = useState(null);   // single source of truth — only one video can play
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const t = T[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Track viewport so we only ever MOUNT one layout (prevents duplicate hidden iframe playing in background)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const play = (id) => setPlayingId(id);
  const stop = () => setPlayingId(null);

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

  // Reset slider & playing state when filter changes
  useEffect(() => {
    setActiveIdx(0);
    setPlayingId(null);
  }, [activeFilter]);

  // Navigate and stop any playing video
  const navigateTo = (idx) => {
    setPlayingId(null);
    setActiveIdx(idx);
  };
  const prev = () => navigateTo(Math.max(0, activeIdx - 1));
  const next = () => navigateTo(Math.min(filtered.length - 1, activeIdx + 1));

  // 3D transform config per offset distance
  const cardConfig = [
    { txAbs: 0,   ryAbs: 0,  scale: 1,    opacity: 1,    z: 10 },
    { txAbs: 238, ryAbs: 42, scale: 0.75, opacity: 0.55, z: 8  },
    { txAbs: 420, ryAbs: 60, scale: 0.52, opacity: 0.25, z: 6  },
  ];

  const getStyle = (offset) => {
    const abs = Math.abs(offset);
    if (abs > 2) return null;
    const { txAbs, ryAbs, scale, opacity, z } = cardConfig[abs];
    const sign = offset >= 0 ? 1 : -1;
    return {
      transform: `translateX(${txAbs * sign}px) rotateY(${ryAbs * -sign}deg) scale(${scale})`,
      opacity,
      zIndex: z,
      transition: 'all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
  };

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
      <section className="pb-24">

        {/* Section title */}
        <div className="flex items-center gap-4 mb-8 px-6 md:px-12">
          <p className="text-[10px] tracking-[0.5em] text-[#c9a854] uppercase">{t.videoSection}</p>
          <div className="flex-1 h-px bg-gradient-to-r from-[#c9a85430] to-transparent" />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12 px-6 md:px-12">
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

        {/* ── 3D Coverflow Slider (desktop) ──────────────────── */}
        {!isMobile && (
        <div>
          {/* Stage */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: '480px', perspective: '1100px' }}
          >
            {filtered.map((video, i) => {
              const offset = i - activeIdx;
              const style = getStyle(offset);
              if (!style) return null;
              const isActive = offset === 0;

              return (
                <div
                  key={video.id}
                  className="absolute"
                  style={{ width: '230px', ...style, cursor: isActive ? 'default' : 'pointer' }}
                  onClick={() => !isActive && navigateTo(i)}
                >
                  {/* Card */}
                  <div
                    className="relative w-full rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-2xl shadow-black/60"
                    style={{ paddingBottom: '177.78%' }}
                  >
                    {/* Dim overlay for non-active */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/50 z-10 rounded-2xl pointer-events-none" />
                    )}

                    {playingId === video.id && isActive ? (
                      <>
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`}
                          title={lang === 'tr' ? video.titleTr : video.titleEn}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <button
                          onClick={(e) => { e.stopPropagation(); stop(); }}
                          className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-200"
                          aria-label="Durdur"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                          </svg>
                        </button>
                      </>
                    ) : (
                      <button
                        className="absolute inset-0 w-full h-full group/play"
                        onClick={(e) => { e.stopPropagation(); if (isActive) play(video.id); }}
                        aria-label="Oynat"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={lang === 'tr' ? video.titleTr : video.titleEn}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-black/20 group-hover/play:bg-black/0 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover/play:scale-110 transition-transform duration-300">
                              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Meta — active card only */}
                  {isActive && (
                    <div className="mt-5 text-center">
                      <span className="inline-block text-[8px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#c9a85440] text-[#c9a854]/80 mb-2">
                        {t.categories[video.category]}
                      </span>
                      <p className="text-sm text-white font-light tracking-wide">
                        {lang === 'tr' ? video.titleTr : video.titleEn}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              disabled={activeIdx === 0}
              className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c9a85450] hover:text-[#c9a854] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigateTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIdx
                      ? 'w-5 h-1.5 bg-[#c9a854]'
                      : 'w-1.5 h-1.5 bg-[#2a2a2a] hover:bg-[#c9a85460]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={activeIdx === filtered.length - 1}
              className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c9a85450] hover:text-[#c9a854] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        )}

        {/* ── Mobile: single card + nav ───────────────────────── */}
        {isMobile && (
        <div className="px-6">
          {filtered[activeIdx] && (() => {
            const video = filtered[activeIdx];
            return (
              <div>
                <div
                  className="relative w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-2xl shadow-black/60"
                  style={{ paddingBottom: 'min(533px, 177.78%)' }}
                >
                  {playingId === video.id ? (
                    <>
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1`}
                        title={lang === 'tr' ? video.titleTr : video.titleEn}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        onClick={() => stop()}
                        className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-200"
                        aria-label="Durdur"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                      </button>
                    </>
                  ) : (
                    <button
                      className="absolute inset-0 w-full h-full group/play"
                      onClick={() => play(video.id)}
                      aria-label="Oynat"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={lang === 'tr' ? video.titleTr : video.titleEn}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Meta */}
                <div className="mt-4 text-center">
                  <span className="inline-block text-[8px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#c9a85440] text-[#c9a854]/80 mb-2">
                    {t.categories[video.category]}
                  </span>
                  <p className="text-sm text-white font-light">{lang === 'tr' ? video.titleTr : video.titleEn}</p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-5 mt-6">
                  <button onClick={prev} disabled={activeIdx === 0} className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 disabled:opacity-20 disabled:cursor-not-allowed hover:border-[#c9a85450] hover:text-[#c9a854] transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <div className="flex gap-2">
                    {filtered.map((_, i) => (
                      <button key={i} onClick={() => navigateTo(i)} className={`rounded-full transition-all duration-300 ${i === activeIdx ? 'w-5 h-1.5 bg-[#c9a854]' : 'w-1.5 h-1.5 bg-[#2a2a2a]'}`} />
                    ))}
                  </div>
                  <button onClick={next} disabled={activeIdx === filtered.length - 1} className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 disabled:opacity-20 disabled:cursor-not-allowed hover:border-[#c9a85450] hover:text-[#c9a854] transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
        )}
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

      {/* ── Floating WhatsApp button ──────────────────────────── */}
      <a
        href="https://wa.me/905546963048"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/40 hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300"
        aria-label="WhatsApp ile iletişim"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
