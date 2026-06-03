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
    hero:    { eyebrow: 'Kişisel Portfolyo', title1: 'Işığı Yakala,', title2: 'Anı Hisset', desc: 'Işığın, anın ve duygunun peşinde — kişisel kareler ve seçili anlar.', cta: 'Prodüksiyonu Gör', booking: 'Rezervasyon' },
    gallery: { eyebrow: 'Kişisel Galeri', title: 'Seçili Kareler', sub: 'Az ama öz — her kare, bir anın özü.', comingSoon: 'Yakında Eklenecek' },
    video:   { eyebrow: 'Kişisel Film', title: 'Reels & Kısa Film', sub: 'Hareket eden kareler, duran anlar.' },
    about:   { eyebrow: 'Hikayem', title1: 'Merhaba,', title2: 'Ben Atilla.', p1: 'Işığın, gölgenin ve anın yarattığı sihirle büyülendim. Her çekim, bir hikayenin başlangıcı; her kare, dondurulmuş bir duygu.', p2: 'Portre fotoğrafçılığından doğa çekimlerine, kurumsal filmlerden düğün hikayelerine uzanan geniş bir yelpazede çalışıyorum.', p3: 'Full-stack yazılım geliştirici geçmişim, görsel işler konusundaki teknik bakış açısını keskinleştiriyor — doğru ışık, doğru an, doğru post-prodüksiyon.', stats: [['3+', 'Yıl Deneyim'], ['100+', 'Proje'], ['∞', 'Tutku']], services: ['Portre', 'Doğa', 'Etkinlik', 'Ürün', 'Drone', 'Film'] },
    contact: { eyebrow: 'Birlikte Çalışalım', title: 'Rezervasyon & İletişim', name: 'Ad Soyad', email: 'E-posta', emailPh: 'ornek@email.com', service: 'Hizmet', servicePh: 'Seçin...', message: 'Mesaj', messagePh: 'Proje hakkında bilgi verin...', send: 'Mesaj Gönder', sending: 'Gönderiliyor...', error: 'Bir hata oluştu. Lütfen tekrar deneyin.', success: 'Mesajınız alındı!', successSub: 'En kısa sürede dönüş yapacağım.', newMsg: 'Yeni Mesaj', opts: [['Portre', 'Portre Fotoğrafı'], ['Doğa', 'Doğa / Manzara'], ['Etkinlik', 'Etkinlik / Düğün'], ['Ürün', 'Ürün / Reklam'], ['Video', 'Video / Film'], ['Diğer', 'Diğer']] },
    catLabel: { landscape: 'Doğa', portrait: 'Portre', event: 'Etkinlik', commercial: 'Ürün / Reklam' },
  },
  en: {
    nav:     { works: 'Photos', video: 'Reels', about: 'About', contact: 'Contact', booking: 'Booking', home: 'Home', pro: 'Production' },
    hero:    { eyebrow: 'Personal Portfolio', title1: 'Capture Light,', title2: 'Feel the Moment', desc: 'Chasing light, moments and feeling — personal frames and selected instants.', cta: 'View Production', booking: 'Booking' },
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

function EditorialPhoto({ item, onClick }) {
  const hasImage = !!item.cloudinaryId;
  const grad = gradients[item.category] || gradients.commercial;
  const aspect = aspectClasses[item.aspect] || aspectClasses.landscape;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl group ${aspect} ${hasImage ? 'cursor-zoom-in' : ''}`}
      onClick={hasImage ? onClick : undefined}
    >
      {hasImage ? (
        <>
          <img
            src={cloudinaryUrl(item.cloudinaryId)}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          {/* Zoom hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <svg className="w-8 h-8 text-white/0 group-hover:text-white/70 transition-all duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </>
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

function EditorialBlock({ item, index, lang, onPhotoClick }) {
  const num = String(index + 1).padStart(2, '0');
  const t = T[lang];
  const title   = lang === 'en' ? (item.titleEn   || item.title)   : item.title;
  const caption = lang === 'en' ? (item.captionEn || item.caption) : item.caption;

  const photo = <EditorialPhoto item={item} onClick={() => onPhotoClick(item)} />;

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

const realPhotos = galleryItems.filter(i => i.cloudinaryId);

export default function PhotoPortfolio() {
  const [lang, setLang] = useState(detectLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [lightboxItem, setLightboxItem] = useState(null);
  const contactRef = useRef(null);

  // Lightbox helpers
  const lbIdx = lightboxItem ? realPhotos.findIndex(i => i.id === lightboxItem.id) : -1;
  const openLightbox  = (item) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);
  const prevPhoto = () => setLightboxItem(realPhotos[(lbIdx - 1 + realPhotos.length) % realPhotos.length]);
  const nextPhoto = () => setLightboxItem(realPhotos[(lbIdx + 1) % realPhotos.length]);

  useEffect(() => {
    if (!lightboxItem) return;
    const onKey = (e) => {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxItem, lbIdx]);
  const t = T[lang];
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

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
            <Link
              to="/photo/works"
              className="px-8 py-3.5 bg-[#c9a854] text-black text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#e8c87d] hover:scale-105 transition-all duration-300"
            >
              {t.hero.cta}
            </Link>
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
              <EditorialBlock key={item.id} item={item} index={index} lang={lang} onPhotoClick={openLightbox} />
            ))}
          </div>

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

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#1a1a1a]">
              <a
                href="https://www.instagram.com/atillakoz.shoot/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] tracking-widest text-gray-500 uppercase hover:text-[#c9a854] transition-colors duration-300 group"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@atillakoz.shoot</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded border border-[#c9a85430] text-[#c9a854]/50">{lang === 'tr' ? 'Profesyonel' : 'Pro'}</span>
              </a>
              <a
                href="https://www.instagram.com/atillakz/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] tracking-widest text-gray-500 uppercase hover:text-[#c9a854] transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@atillakz</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded border border-[#2a2a2a] text-gray-600">{lang === 'tr' ? 'Kişisel' : 'Personal'}</span>
              </a>
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

          {/* Quick contact buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="https://wa.me/905546963048"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] text-xs tracking-widest uppercase hover:bg-[#25D366]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/atillakoz.shoot/"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/25 text-[#E1306C] text-xs tracking-widest uppercase hover:bg-[#E1306C]/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram DM
            </a>
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

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightboxItem && (() => {
        const lbTitle   = lang === 'en' ? (lightboxItem.titleEn   || lightboxItem.title)   : lightboxItem.title;
        const lbCaption = lang === 'en' ? (lightboxItem.captionEn || lightboxItem.caption) : lightboxItem.caption;
        return (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-6 text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Kapat"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-gray-600 uppercase">
              {lbIdx + 1} / {realPhotos.length}
            </p>

            {/* Image */}
            <div className="relative flex items-center justify-center w-full max-h-[75vh]" onClick={e => e.stopPropagation()}>
              {/* Prev */}
              <button
                onClick={prevPhoto}
                className="absolute left-0 md:-left-14 z-10 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                aria-label="Önceki"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <img
                src={cloudinaryUrl(lightboxItem.cloudinaryId)}
                alt={lbTitle}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />

              {/* Next */}
              <button
                onClick={nextPhoto}
                className="absolute right-0 md:-right-14 z-10 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                aria-label="Sonraki"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center max-w-lg" onClick={e => e.stopPropagation()}>
              <p className="text-white font-thin text-lg tracking-wide">{lbTitle}</p>
              {lightboxItem.location && (
                <p className="text-[10px] tracking-[0.5em] text-[#c9a85470] uppercase mt-1">{lightboxItem.location}</p>
              )}
              {lbCaption && (
                <p className="text-gray-500 text-sm leading-relaxed mt-3 font-light">{lbCaption}</p>
              )}
            </div>

            {/* ESC hint */}
            <p className="absolute bottom-5 text-[9px] tracking-[0.4em] text-gray-700 uppercase">
              ESC {lang === 'tr' ? '— Kapat' : '— Close'} &nbsp;·&nbsp; ← → {lang === 'tr' ? '— Geçiş' : '— Navigate'}
            </p>
          </div>
        );
      })()}

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
