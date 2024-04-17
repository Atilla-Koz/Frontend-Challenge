import Text from '../assets/header/A.png';
import Logo from '../assets/header/Ellipse 9.png';
import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';
export default function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <header className="flex flex-row justify-around pb-12">
      <section className="relative">
        <img className="hLogo" src={Logo} alt="Logo" />
        <img className="absolute top-1/3 left-5" src={Text} alt="Text" />
      </section>
      <section className="flex flex-row gap-16 items-center">
        <p className="dark:text-white">{data[language].headerData.skills}</p>
        <p className="dark:text-white">{data[language].headerData.projects}</p>
        <p className="flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
          {data[language].headerData.projects}
        </p>
      </section>
    </header>
  );
}
