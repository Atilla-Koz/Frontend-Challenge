import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';
import { toast } from 'react-toastify';

export default function Header({ skillsRef, projectsRef, contactRef, profileRef }) {
  const { language } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const headerOffset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Scroll sonrası toast bildirimi
      const sectionName = 
        ref === skillsRef ? data[language].headerData.skills :
        ref === projectsRef ? data[language].headerData.projects :
        ref === profileRef ? data[language].headerData.about :
        ref === contactRef ? data[language].headerData.contact : '';

      toast.success(`${sectionName} ${language === 'tr' ? 'bölümüne geçildi' : 'section loaded'}`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleHireMeClick = () => {
    toast.info(language === 'tr' ? 'CV açılıyor...' : 'Opening CV...', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored"
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/A.png"
              alt="Logo"
              className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                toast.success(language === 'tr' ? 'Ana sayfaya dönüldü' : 'Back to home', {
                  position: "bottom-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "colored"
                });
              }}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.skills}
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.projects}
            </button>
            <button
              onClick={() => scrollToSection(profileRef)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.about}
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.contact}
            </button>
            <a
              href={data[language].socialLinks.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHireMeClick}
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-customPurple to-customPurple1 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              {data[language].headerData.hireMe}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.skills}
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.projects}
            </button>
            <button
              onClick={() => scrollToSection(profileRef)}
              className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.about}
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              {data[language].headerData.contact}
            </button>
            <a
              href={data[language].socialLinks.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHireMeClick}
              className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-customPurple to-customPurple1 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              {data[language].headerData.hireMe}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
