import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div className=" bg-white dark:bg-dark">
      <h2 className="dark:text-darkSubTitle text-title  font-semibold text-5xl leading-12 w-1039 h-64 ml-left-5">
        {data[language].profileData.title}
      </h2>
      <section className="dark:text-darkFont flex md:flex-row justify-around gap-4 pl-[7rem] pr-[5rem]  text-title  flex-col  ">
        <div className="flex-1 flex flex-col">
          <h3 className="dark:text-darkSubTitle text-3xl text-customPurple1 font-medium pb-2">
            {data[language].profileData.title}
          </h3>
          {data[language].profileData.details.map((detail, index) => (
            <p
              key={index}
              className="flex md:flex-row flex-col items-center font-semibold"
            >
              {detail.label}{' '}
              <span className="font-normal ">
                &nbsp;&nbsp;&nbsp;{detail.value}
              </span>
            </p>
          ))}
        </div>
        <div className="flex-1">
          <h2 className="dark:text-darkSubTitle text-3xl text-customPurple1 font-medium pb-2">
            {data[language].profileData.aboutMe.title}
          </h2>
          <span className="flex flex-col justify-around items-center">
            <p>{data[language].profileData.aboutMe.description}</p>
          </span>
        </div>
      </section>
      <hr className="m-20 border border-line " />
    </div>
  );
}
