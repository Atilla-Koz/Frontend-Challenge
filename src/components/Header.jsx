import Text from '../assets/header/A.png';
import Logo from '../assets/header/Ellipse 9.png';
import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';
export default function Header() {
  const { language } = useContext(LanguageContext);
  const handleScroll = (scrollAmount) => {
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <header className="flex flex-row justify-around pb-12">
      <section className="relative">
        <img className="hLogo" src={Logo} alt="Logo" />
        <img className="absolute top-1/3 left-5" src={Text} alt="Text" />
      </section>
      <section className="flex flex-row sm:gap-16 gap-6 items-center">
        <button
          className="dark:text-customGray"
          onClick={() => handleScroll(400)}
        >
          {data[language].headerData.skills}
        </button>
        <button
          className="dark:text-customGray"
          onClick={() => handleScroll(2000)}
        >
          {data[language].headerData.projects}
        </button>
        <button className="flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 sm:px-5 px-1 py-2 dark:bg-white">
          {data[language].headerData.hireMe}
        </button>
      </section>
    </header>
  );
}
