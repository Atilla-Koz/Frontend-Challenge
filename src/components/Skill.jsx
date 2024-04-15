import { skillData } from './data';

export default function Skill() {
  return (
    <section className=" bg-white dark:bg-black">
      <h2 className="text-title font-semibold text-5xl leading-12 w-1039 h-64 ml-left-5">
        {skillData.title}
      </h2>
      <div className="flex md:flex-row justify-around gap-4 pl-5p pr-5p flex-col">
        {skillData.skills.map((skill, index) => (
          <div key={index} className="skillsCard">
            <h3 className="font-medium h-7 text-customPurple1 text-3xl leading-7 py-12">
              {skill.title}
            </h3>
            <p className="text-customGray font-normal text-base leading-normal">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      <hr className="m-20 border border-line" />
    </section>
  );
}
