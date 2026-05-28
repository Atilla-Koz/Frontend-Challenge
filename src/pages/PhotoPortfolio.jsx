import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

// ─── Cloudinary config ────────────────────────────────────────────────────────
// Cloudinary yükleme sonrası CLOUD_NAME değişkenini kendi hesabınla güncelle
const CLOUD_NAME = 'YOUR_CLOUD_NAME';
const cloudinaryUrl = (id, type = 'image') =>
  `https://res.cloudinary.com/${CLOUD_NAME}/${type}/upload/q_auto,f_auto/${id}`;

// ─── Gallery data ─────────────────────────────────────────────────────────────
// cloudinaryId doldurunca placeholder kaybolur, gerçek fotoğraf gösterilir
const galleryItems = [
  { id: 1, cloudinaryId: null, category: 'portrait',    title: 'Golden Hour',      aspect: 'portrait'  },
  { id: 2, cloudinaryId: null, category: 'landscape',   title: 'Mountain Mist',    aspect: 'landscape' },
  { id: 3, cloudinaryId: null, category: 'event',       title: 'Night Lights',     aspect: 'square'    },
  { id: 4, cloudinaryId: null, category: 'commercial',  title: 'Product Story',    aspect: 'landscape' },
  { id: 5, cloudinaryId: null, category: 'portrait',    title: 'Soft Shadows',     aspect: 'portrait'  },
  { id: 6, cloudinaryId: null, category: 'landscape',   title: 'Dawn Horizon',     aspect: 'landscape' },
  { id: 7, cloudinaryId: null, category: 'commercial',  title: 'Brand Identity',   aspect: 'square'    },
  { id: 8, cloudinaryId: null, category: 'event',       title: 'Candid Moments',   aspect: 'portrait'  },
  { id: 9, cloudinaryId: null, category: 'landscape',   title: 'Silent Valley',    aspect: 'landscape' },
];

const videoItems = [
  { id: 1, cloudinaryId: null, title: 'Kurumsal Tanıtım Filmi', duration: '2:34', category: 'Commercial' },
  { id: 2, cloudinaryId: null, title: 'Düğün Hikayesi',         duration: '4:12', category: 'Event'      },
  { id: 3, cloudinaryId: null, title: 'Doğa Belgeseli',         duration: '3:55', category: 'Nature'     },
];

const CATEGORIES = ['all', 'portrait', 'landscape', 'event', 'commercial'];

const categoryLabel = { all: 'Tümü', portrait: 'Portre', landscape: 'Doğa', event: 'Etkinlik', commercial: 'Ürün / Reklam' };

const gradients = {
  portrait:   'from-[#1a0f0f] to-[#2d1a1a]',
  landscape:  'from-[#0a1020] to-[#0f1d2e]',
  event:      'from-[#0d0d14] to-[#14141e]',
  commercial: 'from-[#0f0f0f] to-[#1a1a1a]',
};

const aspectClasses = { portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', square: 'aspect-square' };

// ─── Sub-components ───────────────────────────────────────────────────────────

function PhotoPlaceholder({ item }) {
  const [hovered, setHovered] = useState(false);
  const grad = gradients[item.category] || gradients.commercial;
  const aspect = aspectClasses[item.aspect] || aspectClasses.landscape;
  const hasImage = !!item.cloudinaryId;

  return (
    <div
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${aspect}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hasImage ? (
        <img
          src={cloudinaryUrl(item.cloudinaryId)}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${grad} flex flex-col items-center justify-center`}>
          {/* Film grain overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }}
          />
          {/* Camera icon */}
          <svg className="w-8 h-8 text-[#c9a85440] mb-3 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-[#c9a85450] text-[10px] tracking-[0.3em] uppercase relative z-10">Coming Soon</p>
        </div>
      )}

      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-light text-sm tracking-wide">{item.title}</p>
          <p className="text-[#c9a854] text-[10px] tracking-widest uppercase mt-1">{categoryLabel[item.category]}</p>
        </div>
      </div>
    </div>
  );
}

function VideoPlaceholder({ item }) {
  return (
    <div className="group relative aspect-video bg-gradient-to-br from-[#0f0f0f] to-[#1a1412] rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-72 md:w-80">
      {item.cloudinaryId ? (
        <video
          src={cloudinaryUrl(item.cloudinaryId, 'video')}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          onMouseEnter={e => e.target.play()}
          onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }}
          />
          {/* Play button */}
          <div className="w-14 h-14 rounded-full border border-[#c9a85440] flex items-center justify-center group-hover:border-[#c9a854] group-hover:bg-[#c9a85410] transition-all duration-300">
            <svg className="w-5 h-5 text-[#c9a85460] group-hover:text-[#c9a854] ml-1 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
        <p className="text-white text-sm font-light">{item.title}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[#c9a854] text-[10px] tracking-widest uppercase">{item.category}</span>
          <span className="text-gray-500 text-[10px]">{item.duration}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function PhotoPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent | error
  const contactRef = useRef(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      await emailjs.send('service_q8ppv8h', 'template_jcj75rh', formData, '_qFwa_D48L5CJ4ZqH');
      setFormStatus('sent');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch {
      setFormStatus('error');
    }
  };

  const navLinks = [
    { label: 'Çalışmalar', action: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Video', action: () => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'Hakkımda', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: 'İletişim', action: scrollToContact },
  ];

  return (
    <div className="bg-[#080808] text-[#f0f0f0] min-h-screen">

      {/* ── Header ────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[#080808]/80 backdrop-blur-md border-b border-[#ffffff08]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#c9a854] flex items-center justify-center text-black font-semibold text-sm group-hover:bg-[#e8c87d] transition-colors duration-300">
            AK
          </div>
          <span className="hidden sm:block text-xs tracking-[0.35em] text-gray-400 uppercase group-hover:text-white transition-colors duration-300">
            Atilla Köz
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="text-xs tracking-widest text-gray-500 uppercase hover:text-[#c9a854] transition-colors duration-300"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Booking CTA */}
          <button
            onClick={scrollToContact}
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#c9a85440] text-[#c9a854] text-xs tracking-widest uppercase rounded-full hover:bg-[#c9a85410] hover:border-[#c9a854] transition-all duration-300"
          >
            Rezervasyon
          </button>

          {/* Back to home */}
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[10px] tracking-widest text-gray-600 uppercase hover:text-gray-300 transition-colors duration-300"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:block">Ana Sayfa</span>
          </Link>

          {/* Mobile menu */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0d0d0d] border-b border-[#1a1a1a] py-4 px-6 flex flex-col gap-4 md:hidden">
            {navLinks.map(({ label, action }) => (
              <button key={label} onClick={action} className="text-xs tracking-widest text-gray-400 uppercase text-left hover:text-[#c9a854] transition-colors">
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Placeholder background — replace with Cloudinary hero image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0b08] via-[#120e08] to-[#080808]">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}
          />
        </div>
        {/* Gold accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a85430] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a85420] to-transparent" />
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a854] rounded-full blur-[140px] opacity-[0.04]" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.8em] text-[#c9a85480] uppercase mb-6">Fotoğraf &amp; Video</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white leading-none tracking-tight mb-6">
            Işığı Yakala,<br />
            <span className="text-[#c9a854]">Anı Hisset</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base tracking-wide max-w-md mx-auto leading-relaxed">
            Her kareye bir hikaye, her videoya bir duygu sığdırıyorum. Profesyonel portre, doğa ve kurumsal çekimler.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-[#c9a854] text-black text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#e8c87d] hover:scale-105 transition-all duration-300"
            >
              Çalışmaları Gör
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 border border-[#ffffff20] text-gray-300 text-xs tracking-widest uppercase rounded-full hover:border-[#c9a85440] hover:text-[#c9a854] transition-all duration-300"
            >
              Rezervasyon
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a85440] to-transparent" />
          <svg className="w-4 h-4 text-[#c9a85440]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────── */}
      <section id="gallery" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-3">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-thin text-white">Seçili Çalışmalar</h2>
            </div>
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#c9a854] text-black'
                      : 'border border-[#2a2a2a] text-gray-500 hover:border-[#c9a85440] hover:text-[#c9a854]'
                  }`}
                >
                  {categoryLabel[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div key={item.id} className="break-inside-avoid">
                <PhotoPlaceholder item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Work ────────────────────────────────────────── */}
      <section id="video" className="py-24 bg-[#050505] border-t border-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-3">Sinema &amp; Film</p>
            <h2 className="text-3xl md:text-4xl font-thin text-white">Video Çalışmalar</h2>
          </div>
          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible
            scrollbar-none [&::-webkit-scrollbar]:hidden">
            {videoItems.map((v) => (
              <VideoPlaceholder key={v.id} item={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 md:px-12 border-t border-[#0f0f0f]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#141008] to-[#1a150a] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-[#c9a85430] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#c9a85440] text-[10px] tracking-[0.3em] uppercase">Fotoğraf Yakında</p>
              </div>
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#c9a85420] -z-10" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-6">Hikayem</p>
            <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">Merhaba,<br />Ben Atilla.</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>Işığın, gölgenin ve anın yarattığı sihirle büyülendim. Her çekim, bir hikayenin başlangıcı; her kare, dondurulmuş bir duygu.</p>
              <p>Portre fotoğrafçılığından doğa çekimlerine, kurumsal filmlerden düğün hikayelerine uzanan geniş bir yelpazede çalışıyorum.</p>
              <p>Full-stack yazılım geliştirici geçmişim, görsel işler konusundaki teknik bakış açısını keskinleştiriyor — doğru ışık, doğru an, doğru post-prodüksiyon.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-[#1a1a1a]">
              {[['3+', 'Yıl Deneyim'], ['100+', 'Proje'], ['∞', 'Tutku']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-thin text-[#c9a854]">{num}</p>
                  <p className="text-[10px] tracking-widest text-gray-600 uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Portre', 'Doğa', 'Etkinlik', 'Ürün', 'Drone', 'Film'].map((s) => (
                <span key={s} className="px-3 py-1 border border-[#2a2a2a] text-gray-500 text-[10px] tracking-widest uppercase rounded-full hover:border-[#c9a85440] hover:text-[#c9a854] transition-all duration-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Booking ─────────────────────────────────── */}
      <section id="contact" ref={contactRef} className="py-24 px-6 md:px-12 bg-[#050505] border-t border-[#0f0f0f]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-4">Birlikte Çalışalım</p>
            <h2 className="text-3xl md:text-4xl font-thin text-white">Rezervasyon &amp; İletişim</h2>
            <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#c9a854] to-transparent mx-auto" />
          </div>

          <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-8 md:p-10">
            {formStatus === 'sent' ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full border border-[#c9a854] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-[#c9a854]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-light">Mesajınız alındı!</p>
                <p className="text-gray-500 text-sm mt-2">En kısa sürede dönüş yapacağım.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-[#c9a854] text-xs tracking-widest uppercase hover:text-[#e8c87d] transition-colors">
                  Yeni Mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">Ad Soyad *</label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#c9a85450] transition-colors"
                      placeholder="Atilla Köz"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">E-posta *</label>
                    <input
                      type="email" required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#c9a85450] transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">Hizmet</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a85450] transition-colors appearance-none"
                  >
                    <option value="">Seçin...</option>
                    <option value="Portre">Portre Fotoğrafı</option>
                    <option value="Doğa">Doğa / Manzara</option>
                    <option value="Etkinlik">Etkinlik / Düğün</option>
                    <option value="Ürün">Ürün / Reklam</option>
                    <option value="Video">Video / Film</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">Mesaj</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#c9a85450] transition-colors resize-none"
                    placeholder="Proje hakkında bilgi verin..."
                  />
                </div>

                {formStatus === 'error' && (
                  <p className="text-red-400 text-xs">Bir hata oluştu. Lütfen tekrar deneyin.</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-[#c9a854] text-black text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-[#e8c87d] hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Gönderiliyor...</>
                  ) : (
                    <> Mesaj Gönder <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <div className="mt-8 text-center">
            <a href="mailto:atillakoz@hotmail.com" className="text-[#c9a85460] text-xs tracking-widest uppercase hover:text-[#c9a854] transition-colors duration-300">
              atillakoz@hotmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="py-10 px-6 border-t border-[#0f0f0f]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#c9a854] flex items-center justify-center text-black font-semibold text-[10px]">AK</div>
            <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">Atilla Köz Photography</span>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Atilla-Koz" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest text-gray-600 uppercase hover:text-[#c9a854] transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest text-gray-600 uppercase hover:text-[#c9a854] transition-colors">LinkedIn</a>
            <Link to="/software" className="text-[10px] tracking-widest text-gray-600 uppercase hover:text-violet-400 transition-colors">Software</Link>
          </div>
          <p className="text-[10px] text-gray-700">© {new Date().getFullYear()} Atilla Köz</p>
        </div>
      </footer>
    </div>
  );
}
