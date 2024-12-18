import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Hero() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="dark:bg-dark flex flex-col gap-4 pb-4">
      <section className="dark:bg-dark flex flex-row justify-center items-center flex-wrap-reverse lg:flex-nowrap">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="dark:text-darkSubTitle text-xl ml-left-33 mr-right-25 text-customPurple relative">
            <img
              className="absolute top-1/2 right-full"
              src={data[language].heroData.lineIcon}
              alt="line"
            />
            {data[language].heroData.name}
          </h2>

          <h1 className="ml-left-25 mr-right-25 text-title text-5xl md:text-7xl dark:text-titleDark">
            {data[language].heroData.role}
          </h1>

          <p className="text-lg ml-left-25 mr-right-25 text-customGray dark:text-darkFont">
            {data[language].heroData.description}
          </p>

          <section className="flex md:flex-row md:pt-10 md:justify-center items-center gap-4 pt-8 flex-col">
            {/* Hire Me Button */}
            <a
              href="https://docs.google.com/document/d/1AOdGKgLxDlR3bpVKO4yO4SaCUEaHVF9ix4kqB6e2t88/edit?tab=t.0#heading=h.88hjc8sweuxg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white bg-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2 dark:bg-[#E1E1FF] dark:text-[#000000]">
                {data[language].heroData.hireMeButton}
              </button>
            </a>

            {/* GitHub Button */}
            <a
              href={data[language].heroData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="dark:text-[#E1E1FF] flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
                <img
                  className="mr-1"
                  src={data[language].heroData.githubIcon}
                  alt="GitHub"
                />
                {data[language].heroData.githubLabel}
              </button>
            </a>

            {/* LinkedIn Button */}
            <a
              href={data[language].heroData.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="dark:text-[#E1E1FF] flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
                <img
                  className="mr-1"
                  src={data[language].heroData.linkedinIcon}
                  alt="LinkedIn"
                />
                {data[language].heroData.linkedinLabel}
              </button>
            </a>
          </section>
        </div>

        <div className="flex-row-reverse md:pr-[20rem] pr-[0]">
          <img
            className="w-auto rounded-full shadow-lg"
            src={data[language].heroData.heroImage}
            alt="hero"
          />
        </div>
      </section>
    </div>
  );
}
