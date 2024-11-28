import { useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Skill() {
  const { language } = useContext(LanguageContext);
  return (
    <section className=" bg-white dark:bg-dark pt-16">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 w-1039 h-64 ml-left-5">
        {data[language].skillData.title}
      </h2>
      <div className="flex md:flex-row justify-around gap-4 pl-5p pr-5p flex-col">
        {data[language].skillData.skills.map((skill, index) => (
          <div key={index} className="skillsCard">
            <h3 className="dark:text-darkSubTitle font-medium h-7 text-customPurple1 text-3xl leading-7 py-12">
              {skill.title}
            </h3>
            <p className="dark:text-darkFont text-customGray font-normal text-base leading-normal">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      <hr className="m-20 border border-line" />
    </section>
  );
}
