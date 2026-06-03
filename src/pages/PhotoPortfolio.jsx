import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

// ─── Cloudinary config ────────────────────────────────────────────────────────
// Cloudinary yükleme sonrası CLOUD_NAME değişkenini kendi hesabınla güncelle
const CLOUD_NAME = 'djenodye6';
const cloudinaryUrl = (id, type = 'image') =>
  `https://res.cloudinary.com/${CLOUD_NAME}/${type}/upload/q_auto,f_auto/${id}`;

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  tr: {
    nav:     { works: 'Fotoğraflar', video: 'Reels', about: 'Hakkımda', contact: 'İletişim', booking: 'Rezervasyon', home: 'Ana Sayfa', pro: 'Prodüksiyon' },
    hero:    { eyebrow: 'Kişisel Portfolyo', title1: 'Işığı Yakala,', title2: 'Anı Hisset', desc: 'Işığın, anın ve duygunun peşinde — kişisel kareler ve seçili anlar.', cta: 'Fotoğrafları Gör', booking: 'Rezervasyon' },
    gallery: { eyebrow: 'Kişisel Galeri', title: 'Seçili Kareler', sub: 'Az ama öz — her kare, bir anın özü.', comingSoon: 'Yakında Eklenecek' },
    video:   { eyebrow: 'Kişisel Film', title: 'Reels & Kısa Film', sub: 'Hareket eden kareler, duran anlar.' },
    about:   { eyebrow: 'Hikayem', title1: 'Merhaba,', title2: 'Ben Atilla.', p1: 'Işığın, gölgenin ve anın yarattığı sihirle büyülendim. Her çekim, bir hikayenin başlangıcı; her kare, dondurulmuş bir duygu.', p2: 'Portre fotoğrafçılığından doğa çekimlerine, kurumsal filmlerden düğün hikayelerine uzanan geniş bir yelpazede çalışıyorum.', p3: 'Full-stack yazılım geliştirici geçmişim, görsel işler konusundaki teknik bakış açısını keskinleştiriyor — doğru ışık, doğru an, doğru post-prodüksiyon.', stats: [['3+', 'Yıl Deneyim'], ['100+', 'Proje'], ['∞', 'Tutku']], services: ['Portre', 'Doğa', 'Etkinlik', 'Ürün', 'Drone', 'Film'] },
    contact: { eyebrow: 'Birlikte Çalışalım', title: 'Rezervasyon & İletişim', name: 'Ad Soyad', email: 'E-posta', emailPh: 'ornek@email.com', service: 'Hizmet', servicePh: 'Seçin...', message: 'Mesaj', messagePh: 'Proje hakkında bilgi verin...', send: 'Mesaj Gönder', sending: 'Gönderiliyor...', error: 'Bir hata oluştu. Lütfen tekrar deneyin.', success: 'Mesajınız alındı!', successSub: 'En kısa sürede dönüş yapacağım.', newMsg: 'Yeni Mesaj', opts: [['Portre', 'Portre Fotoğrafı'], ['Doğa', 'Doğa / Manzara'], ['Etkinlik', 'Etkinlik / Düğün'], ['Ürün', 'Ürün / Reklam'], ['Video', 'Video / Film'], ['Diğer', 'Diğer']] },
    catLabel: { landscape: 'Doğa', portrait: 'Portre', event: 'Etkinlik', commercial: 'Ürün / Reklam' },
  },
  en: {
    nav:     { works: 'Photos', video: 'Reels', about: 'About', contact: 'Contact', booking: 'Booking', home: 'Home', pro: 'Production' },
    hero:    { eyebrow: 'Personal Portfolio', title1: 'Capture Light,', title2: 'Feel the Moment', desc: 'Chasing light, moments and feeling — personal frames and selected instants.', cta: 'View Photos', booking: 'Booking' },
    gallery: { eyebrow: 'Personal Gallery', title: 'Selected Frames', sub: 'Few but refined — every frame, the essence of a moment.', comingSoon: 'Coming Soon' },
    video:   { eyebrow: 'Personal Film', title: 'Reels & Short Film', sub: 'Moving frames, still moments.' },
    about:   { eyebrow: 'My Story', title1: 'Hello,', title2: "I'm Atilla.", p1: "I've been captivated by the magic that light, shadow, and moments create. Every shoot is the start of a story; every frame, a frozen emotion.", p2: 'I work across a wide range from portrait photography to nature shoots, corporate films to wedding stories.', p3: 'My background in full-stack software development sharpens my technical eye for visual work — the right light, the right moment, the right post-production.', stats: [['3+', 'Years Exp.'], ['100+', 'Projects'], ['∞', 'Passion']], services: ['Portrait', 'Nature', 'Event', 'Product', 'Drone', 'Film'] },
    contact: { eyebrow: "Let's Work Together", title: 'Booking & Contact', name: 'Full Name', email: 'Email', emailPh: 'example@email.com', service: 'Service', servicePh: 'Select...', message: 'Message', messagePh: 'Tell me about your project...', send: 'Send Message', sending: 'Sending...', error: 'An error occurred. Please try again.', success: 'Message received!', successSub: "I'll get back to you as soon as possible.", newMsg: 'New Message', opts: [['Portrait', 'Portrait Photography'], ['Nature', 'Nature / Landscape'], ['Event', 'Event / Wedding'], ['Product', 'Product / Commercial'], ['Video', 'Video / Film'], ['Other', 'Other']] },
    catLabel: { landscape: 'Nature', portrait: 'Portrait', event: 'Event', commercial: 'Product / Ad' },
  },
};

// ─── Gallery data ─────────────────────────────────────────────────────────────
const galleryItems = [
  { id: 1, cloudinaryId: 'v1779980714/DSCF3032_ialrd0.jpg',   category: 'landscape', aspect: 'portrait',  layout: 'left',   location: 'Marmaris, Türkiye', title: 'Sokak Manzarası',  titleEn: 'Street View',       caption: 'Yağmur sonrası ıslak kaldırımlar, boş bir sokağın sessizliği. Her adımda geçmişin izleri.', captionEn: 'Wet cobblestones after rain, the silence of an empty street. History echoes in every step.' },
  { id: 2, cloudinaryId: 'v1779980616/DSCF4406-3_qm1lwt.jpg', category: 'landscape', aspect: 'portrait',  layout: 'right',  location: 'Athens, Greece',    title: 'Metro Penceresi', titleEn: 'Metro Window',      caption: 'Cam arkasından süzülen mor ışık. Şehrin sesi, bir kareye sığan sonsuzluk.',               captionEn: 'Purple light filtered through glass. The city\'s pulse, infinity in a single frame.' },
  { id: 3, cloudinaryId: 'v1779980047/DSCF4102_eeucbf.jpg',   category: 'landscape', aspect: 'portrait',  layout: 'center', location: 'Greece',            title: 'Ağaç Manzarası',  titleEn: 'Through the Trees', caption: 'Dalların arasından süzülen ışık. Doğanın sessiz dili, yaprakların fısıltısı.',             captionEn: 'Light filtered through branches. Nature\'s silent language, the whisper of leaves.' },
  { id: 4, cloudinaryId: 'v1779980047/DSCF3089_gpwtjm.jpg',   category: 'landscape', aspect: 'landscape', layout: 'full',   location: 'Aegean, Türkiye',   title: 'Deniz Manzarası', titleEn: 'Sea View',          caption: 'Ufukta kaybolan mavi. Sonsuz bir derinlik, sakin bir güç.',                               captionEn: 'Blue fading into the horizon. Endless depth, quiet strength.' },
  { id: 5, cloudinaryId: null, category: 'portrait',   aspect: 'portrait',  layout: 'left',   location: null, title: 'Soft Shadows',   titleEn: 'Soft Shadows',   caption: null, captionEn: null },
  { id: 6, cloudinaryId: null, category: 'landscape',  aspect: 'landscape', layout: 'right',  location: null, title: 'Dawn Horizon',   titleEn: 'Dawn Horizon',   caption: null, captionEn: null },
  { id: 7, cloudinaryId: null, category: 'commercial', aspect: 'square',    layout: 'center', location: null, title: 'Brand Identity', titleEn: 'Brand Identity', caption: null, captionEn: null },
  { id: 8, cloudinaryId: null, category: 'event',      aspect: 'portrait',  layout: 'left',   location: null, title: 'Candid Moments', titleEn: 'Candid Moments', caption: null, captionEn: null },
  { id: 9, cloudinaryId: null, category: 'landscape',  aspect: 'landscape', layout: 'full',   location: null, title: 'Silent Valley',  titleEn: 'Silent Valley',  caption: null, captionEn: null },
];

const videoItems = [
  { id: 1, instagramId: 'DQ4qf6sjKsq', title: 'Film I',   category: 'Film' },
  { id: 2, instagramId: 'DQPZOwbDOOU', title: 'Film II',  category: 'Film' },
  { id: 3, instagramId: 'DMdX7dWoQTp', title: 'Film III', category: 'Film' },
];

const gradients = {
  portrait:   'from-[#1a0f0f] to-[#2d1a1a]',
  landscape:  'from-[#0a1020] to-[#0f1d2e]',
  event:      'from-[#0d0d14] to-[#14141e]',
  commercial: 'from-[#0f0f0f] to-[#1a1a1a]',
};

const aspectClasses = { portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', square: 'aspect-square' };

// ─── Sub-components ───────────────────────────────────────────────────────────

function EditorialPhoto({ item }) {
  const hasImage = !!item.cloudinaryId;
  const grad = gradients[item.category] || gradients.commercial;
  const aspect = aspectClasses[item.aspect] || aspectClasses.landscape;

  return (
    <div className={`relative overflow-hidden rounded-2xl group ${aspect}`}>
      {hasImage ? (
        <img
          src={cloudinaryUrl(item.cloudinaryId)}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${grad} flex flex-col items-center justify-center`}>
          <svg className="w-6 h-6 text-[#c9a85430] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-[#c9a85440] text-[9px] tracking-[0.3em] uppercase">Coming Soon</p>
        </div>
      )}
    </div>
  );
}

function EditorialBlock({ item, index, lang }) {
  const num = String(index + 1).padStart(2, '0');
  const t = T[lang];
  const title   = lang === 'en' ? (item.titleEn   || item.title)   : item.title;
  const caption = lang === 'en' ? (item.captionEn || item.caption) : item.caption;

  const photo = <EditorialPhoto item={item} />;

  const textBlock = (
    <div className="space-y-6">
      <span className="text-[96px] md:text-[128px] font-thin text-[#c9a85406] leading-none select-none block -mb-2">{num}</span>
      <div>
        <h3 className="text-2xl md:text-3xl font-thin text-white tracking-wide">{title}</h3>
        {item.location && (
          <p className="text-[10px] tracking-[0.5em] text-[#c9a85470] uppercase mt-2">{item.location}</p>
        )}
      </div>
      {caption && (
        <p className="text-gray-500 text-sm leading-relaxed font-light max-w-[260px]">{caption}</p>
      )}
      <div className="flex items-center gap-4 pt-2">
        <div className="h-px w-8 bg-[#c9a85440]" />
        <p className="text-[10px] tracking-[0.4em] text-gray-700 uppercase">{t.catLabel[item.category]}</p>
      </div>
    </div>
  );

  if (item.layout === 'left') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-20 items-center">
        {photo}
        {textBlock}
      </div>
    );
  }

  if (item.layout === 'right') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-20 items-center">
        <div className="order-2 md:order-1">{textBlock}</div>
        <div className="order-1 md:order-2">{photo}</div>
      </div>
    );
  }

  if (item.layout === 'center') {
    return (
      <div className="max-w-sm mx-auto text-center">
        <span className="text-[96px] font-thin text-[#c9a85406] leading-none select-none block -mb-2">{num}</span>
        {photo}
        <div className="mt-8 space-y-3">
          <h3 className="text-2xl font-thin text-white tracking-wide">{title}</h3>
          {item.location && (
            <p className="text-[10px] tracking-[0.5em] text-[#c9a85470] uppercase">{item.location}</p>
          )}
          {caption && (
            <p className="text-gray-500 text-sm leading-relaxed font-light mt-4">{caption}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-baseline gap-6 mb-10">
        <span className="text-[96px] font-thin text-[#c9a85406] leading-none select-none">{num}</span>
        <div>
          <h3 className="text-2xl md:text-3xl font-thin text-white tracking-wide">{title}</h3>
          {item.location && (
            <p className="text-[10px] tracking-[0.5em] text-[#c9a85470] uppercase mt-1">{item.location}</p>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto">{photo}</div>
      {caption && (
        <div className="max-w-4xl mx-auto mt-6 flex items-start justify-between gap-8">
          <p className="text-gray-500 text-sm leading-relaxed font-light max-w-sm">{caption}</p>
          <p className="text-[10px] tracking-[0.4em] text-gray-700 uppercase flex-shrink-0 mt-1">{t.catLabel[item.category]}</p>
        </div>
      )}
    </div>
  );
}

function VideoCard({ item }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a]">
        <iframe
          src={`https://www.instagram.com/p/${item.instagramId}/embed/`}
          className="w-full block border-0"
          height="620"
          allowTransparency="true"
          allowFullScreen
          loading="lazy"
          title={item.title}
          scrolling="no"
        />
      </div>
      <div className="mt-4 flex items-center justify-between px-1">
        <p className="text-white font-thin text-sm tracking-wide">{item.title}</p>
        <a
          href={`https://www.instagram.com/p/${item.instagramId}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.4em] text-gray-600 hover:text-[#c9a854] uppercase transition-colors duration-300 flex items-center gap-1"
        >
          Instagram
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
function detectLang() {
  const saved = localStorage.getItem('lang');
  if (saved === 'tr' || saved === 'en') return saved;
  return (navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

export default function PhotoPortfolio() {
  const [lang, setLang] = useState(detectLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const contactRef = useRef(null);
  const t = T[lang];
  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      // Map photo form fields to the same template variables used by the software portfolio
      await emailjs.send(
        'service_q8ppv8h',
        'template_jcj75rh',
        {
          fullName: formData.name,
          email:    formData.email,
          phone:    formData.service,   // hizmet türü → phone alanına
          note:     formData.message,
        },
        '_qFwa_D48L5CJ4ZqH'
      );
      setFormStatus('sent');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch {
      setFormStatus('error');
    }
  };

  const navLinks = [
    { label: t.nav.works,   action: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: t.nav.video,   action: () => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: t.nav.about,   action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: t.nav.contact, action: scrollToContact },
  ];

  return (
    <div className="bg-[#080808] text-[#f0f0f0] min-h-screen">

      {/* ── Header ────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[#080808]/80 backdrop-blur-md border-b border-[#ffffff08]">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="https://res.cloudinary.com/djenodye6/image/upload/q_auto,f_auto/v1780050314/Generated_Image_May_29_2026_-_1_21PM_Arka_Plan%C4%B1_Silindi_qz35rj.png"
            alt="Atilla Köz Logo"
            className="h-14 w-auto transition-all duration-300 group-hover:opacity-75 group-hover:scale-105"
          />
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
          <Link
            to="/photo/works"
            className="text-xs tracking-widest text-[#c9a854] uppercase border border-[#c9a85440] px-3 py-1 rounded-full hover:bg-[#c9a85415] transition-all duration-300"
          >
            {t.nav.pro}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center border border-[#2a2a2a] rounded-full overflow-hidden">
            <button
              onClick={() => setLang('tr')}
              className={`px-3 py-1.5 text-[10px] tracking-widest font-medium transition-all duration-300 ${lang === 'tr' ? 'bg-[#c9a854] text-black' : 'text-gray-500 hover:text-white'}`}
            >TR</button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[10px] tracking-widest font-medium transition-all duration-300 ${lang === 'en' ? 'bg-[#c9a854] text-black' : 'text-gray-500 hover:text-white'}`}
            >EN</button>
          </div>

          {/* Booking CTA */}
          <button
            onClick={scrollToContact}
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#c9a85440] text-[#c9a854] text-xs tracking-widest uppercase rounded-full hover:bg-[#c9a85410] hover:border-[#c9a854] transition-all duration-300"
          >
            {t.nav.booking}
          </button>

          {/* Back to home */}
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[10px] tracking-widest text-gray-600 uppercase hover:text-gray-300 transition-colors duration-300"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:block">{t.nav.home}</span>
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
            <Link
              to="/photo/works"
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-widest text-[#c9a854] uppercase text-left"
            >
              {t.nav.pro} →
            </Link>
          </div>
        )}
      </header>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero background — TODO: replace with own Cloudinary image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/djenodye6/image/upload/q_auto,f_auto/v1779984253/Ekran_Resmi_2026-05-28_19.03.41_acgzxs.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Gold accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a85430] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a85420] to-transparent" />
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a854] rounded-full blur-[140px] opacity-[0.04]" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.8em] text-[#c9a85480] uppercase mb-6">{t.hero.eyebrow}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white leading-none tracking-tight mb-6">
            {t.hero.title1}<br />
            <span className="text-[#c9a854]">{t.hero.title2}</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base tracking-wide max-w-md mx-auto leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-[#c9a854] text-black text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#e8c87d] hover:scale-105 transition-all duration-300"
            >
              {t.hero.cta}
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3.5 border border-[#ffffff20] text-gray-300 text-xs tracking-widest uppercase rounded-full hover:border-[#c9a85440] hover:text-[#c9a854] transition-all duration-300"
            >
              {t.hero.booking}
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
      <section id="gallery" className="py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-24 md:mb-32">
            <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-4">{t.gallery.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-4">{t.gallery.title}</h2>
            <p className="text-gray-600 text-sm font-light">{t.gallery.sub}</p>
          </div>

          {/* Editorial blocks */}
          <div className="space-y-36 md:space-y-52">
            {galleryItems.filter(i => i.cloudinaryId).map((item, index) => (
              <EditorialBlock key={item.id} item={item} index={index} lang={lang} />
            ))}
          </div>

          {/* Coming soon thumbnails */}
          {galleryItems.some(i => !i.cloudinaryId) && (
            <div className="mt-40 pt-16 border-t border-[#111111]">
              <p className="text-[10px] tracking-[0.6em] text-[#c9a85428] uppercase mb-8">{t.gallery.comingSoon}</p>
              <div className="flex gap-2">
                {galleryItems.filter(i => !i.cloudinaryId).map((item) => (
                  <div
                    key={item.id}
                    className={`flex-1 bg-gradient-to-br ${gradients[item.category]} rounded-xl overflow-hidden opacity-20 ${aspectClasses[item.aspect] || 'aspect-[3/4]'}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Video Work ────────────────────────────────────────── */}
      <section id="video" className="py-32 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-4">{t.video.eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-4">{t.video.title}</h2>
            <p className="text-gray-600 text-sm font-light">{t.video.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoItems.map((v) => (
              <VideoCard key={v.id} item={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 md:px-12 border-t border-[#0f0f0f]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Profile photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://res.cloudinary.com/djenodye6/image/upload/q_auto,f_auto/v1779984355/Bu%CC%88yu%CC%88k_DSCF5027_kopyas%C4%B1_s9iei2.jpg"
                alt="Atilla Köz"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#c9a85420] -z-10" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-6">{t.about.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">{t.about.title1}<br />{t.about.title2}</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-[#1a1a1a]">
              {t.about.stats.map(([num, label]) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-thin text-[#c9a854]">{num}</p>
                  <p className="text-[10px] tracking-widest text-gray-600 uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-2 mt-8">
              {t.about.services.map((s) => (
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
            <p className="text-[10px] tracking-[0.6em] text-[#c9a85480] uppercase mb-4">{t.contact.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-thin text-white">{t.contact.title}</h2>
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
                <p className="text-white font-light">{t.contact.success}</p>
                <p className="text-gray-500 text-sm mt-2">{t.contact.successSub}</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-[#c9a854] text-xs tracking-widest uppercase hover:text-[#e8c87d] transition-colors">
                  {t.contact.newMsg}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">{t.contact.name} *</label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#c9a85450] transition-colors"
                      placeholder={t.contact.namePh}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">{t.contact.email} *</label>
                    <input
                      type="email" required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#c9a85450] transition-colors"
                      placeholder={t.contact.emailPh}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">{t.contact.service}</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c9a85450] transition-colors appearance-none"
                  >
                    <option value="">{t.contact.servicePh}</option>
                    {t.contact.opts.map(([val, label]) => (
                      <option key={val} value={val}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest text-gray-500 uppercase mb-2">{t.contact.message}</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#c9a85450] transition-colors resize-none"
                    placeholder={t.contact.messagePh}
                  />
                </div>

                {formStatus === 'error' && (
                  <p className="text-red-400 text-xs">{t.contact.error}</p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 bg-[#c9a854] text-black text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-[#e8c87d] hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {formStatus === 'sending' ? (
                    <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>{t.contact.sending}</>
                  ) : (
                    <>{t.contact.send} <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg></>
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
