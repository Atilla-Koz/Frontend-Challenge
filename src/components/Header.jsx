import Text from '../assets/header/A.png';
import Logo from '../assets/header/Ellipse 9.png';
import { useContext, useState, useEffect, useRef } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Header({
  skillsRef,
  projectsRef,
  contactRef,
  profileRef,
}) {
  const { language } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Açılır menüye referans

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Açılır menüyü kapatmak için dış tıklamayı algıla
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="relative pb-12">
      <div className="flex justify-between items-center px-4 sm:px-8">
        <section className="relative">
          <img className="hLogo" src={Logo} alt="Logo" />
          <img className="absolute top-1/3 left-5" src={Text} alt="Text" />
        </section>

        <button
          className="sm:hidden text-customPurple text-2xl dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <section className="hidden sm:flex flex-row sm:gap-16 gap-6 items-center">
          <button
            className="dark:text-customGray hover:text-customPurple transition"
            onClick={() => handleScroll(skillsRef)}
          >
            {data[language].headerData.skills}
          </button>
          <button
            className="dark:text-customGray hover:text-customPurple transition"
            onClick={() => handleScroll(projectsRef)}
          >
            {data[language].headerData.projects}
          </button>
          <button
            className="dark:text-customGray hover:text-customPurple transition"
            onClick={() => handleScroll(contactRef)}
          >
            {data[language].headerData.contact}
          </button>
          <button
            className="dark:text-customGray hover:text-customPurple transition"
            onClick={() => handleScroll(profileRef)}
          >
            {data[language].headerData.about}
          </button>
          <a
            href="https://docs.google.com/document/d/1AOdGKgLxDlR3bpVKO4yO4SaCUEaHVF9ix4kqB6e2t88/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 sm:px-5 px-1 py-2 dark:bg-white"
          >
            {data[language].headerData.hireMe}
          </a>
        </section>
      </div>

      {menuOpen && (
        <div
          className="absolute top-0 left-0 w-full bg-black bg-opacity-50 z-50 sm:hidden flex justify-center items-center"
          ref={menuRef}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-md py-6 px-4">
            <button
              className="block w-full text-center text-customPurple dark:text-white mb-4 text-lg font-medium hover:text-customPurple transition"
              onClick={() => handleScroll(skillsRef)}
            >
              {data[language].headerData.skills}
            </button>
            <button
              className="block w-full text-center text-customPurple dark:text-white mb-4 text-lg font-medium hover:text-customPurple transition"
              onClick={() => handleScroll(projectsRef)}
            >
              {data[language].headerData.projects}
            </button>
            <button
              className="block w-full text-center text-customPurple dark:text-white mb-4 text-lg font-medium hover:text-customPurple transition"
              onClick={() => handleScroll(contactRef)}
            >
              {data[language].headerData.contact}
            </button>
            <button
              className="block w-full text-center text-customPurple dark:text-white mb-4 text-lg font-medium hover:text-customPurple transition"
              onClick={() => handleScroll(profileRef)}
            >
              {data[language].headerData.about}
            </button>
            <a
              href="https://docs.google.com/document/d/1AOdGKgLxDlR3bpVKO4yO4SaCUEaHVF9ix4kqB6e2t88/edit?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-customPurple dark:text-white border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-4 py-2 mt-4 hover:bg-customPurple hover:text-white transition"
            >
              {data[language].headerData.hireMe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
