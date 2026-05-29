import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';
import { toast } from 'react-toastify';

export default function Header({ skillsRef, projectsRef, contactRef, profileRef }) {
  const { language } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref, name) => {
    if (ref?.current) {
      const headerOffset = 80;
      const offsetPosition = ref.current.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(name);
      toast.success(`${name} ${language === 'tr' ? 'bölümüne geçildi' : 'section loaded'}`, {
        position: 'bottom-right',
        autoClose: 1500,
        theme: 'colored',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: data[language].headerData.skills, ref: skillsRef },
    { label: data[language].headerData.projects, ref: projectsRef },
    { label: data[language].headerData.about, ref: profileRef },
    { label: data[language].headerData.contact, ref: contactRef },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark border-b border-violet-500/20 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('');
            }}
          >
            <img
              src="https://res.cloudinary.com/djenodye6/image/upload/q_auto,f_auto/v1780050314/Generated_Image_May_29_2026_-_1_21PM_Arka_Plan%C4%B1_Silindi_qz35rj.png"
              alt="Atilla Köz Logo"
              className="h-16 w-auto transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, ref }) => (
              <button
                key={label}
                onClick={() => scrollToSection(ref, label)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === label
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-violet-500 to-amber-400 transition-all duration-300 ${
                    activeSection === label ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}

            <a
              href={data[language].heroData.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => toast.info(language === 'tr' ? 'CV açılıyor...' : 'Opening CV...', { position: 'bottom-right', autoClose: 1500, theme: 'colored' })}
              className="px-5 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300"
            >
              {data[language].headerData.hireMe}
            </a>

            <a
              href="https://ephemeral-bubblegum-9c1eb9.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => toast.info(language === 'tr' ? 'Blog açılıyor...' : 'Opening Blog...', { position: 'bottom-right', autoClose: 1500, theme: 'colored' })}
              className="flex items-center justify-center w-9 h-9 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-full hover:bg-amber-500/30 hover:scale-105 transition-all duration-300"
              title={data[language].headerData.blog || 'Blog'}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-dark rounded-2xl border border-violet-500/20 flex flex-col gap-3 px-4">
            {navLinks.map(({ label, ref }) => (
              <button
                key={label}
                onClick={() => scrollToSection(ref, label)}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors duration-200 py-2 text-sm font-medium"
              >
                {label}
              </button>
            ))}
            <div className="pt-2 flex gap-3">
              <a
                href={data[language].heroData.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                {data[language].headerData.hireMe}
              </a>
              <a
                href="https://ephemeral-bubblegum-9c1eb9.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-amber-500/20 border border-amber-500/30 text-amber-400 rounded-full"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
