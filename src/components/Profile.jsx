import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="bg-white dark:bg-dark">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 mb-12 ml-left-5">
        {data[language].profileData.title}
      </h2>
      <section className="flex flex-col md:flex-row justify-around gap-12 px-28">
        <div className="flex-1">
          <h3 className="dark:text-darkSubTitle text-3xl text-customPurple1 font-medium pb-4">
            {data[language].profileData.title}
          </h3>
          <ul>
            {data[language].profileData.details.map((detail, index) => (
              <li
                key={index}
                className="flex md:flex-row flex-col items-start md:items-center font-semibold mb-2"
              >
                {detail.label}
                <span className="font-normal ml-2">{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="dark:text-darkSubTitle text-3xl text-customPurple1 font-medium pb-4">
            {data[language].profileData.aboutMe.title}
          </h3>
          <p className="dark:text-darkFont">
            {data[language].profileData.aboutMe.description}
          </p>
        </div>
      </section>
      <hr className="my-16 border-t border-line" />
    </div>
  );
}
