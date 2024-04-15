import img from '../assets/hero/image 1.png';
import git from '../assets/hero/github.png';
import linkedin from '../assets/hero/LinkedIn.png';
import line from '../assets/hero/Line 11.png';
import { heroData } from './data';
export default function Hero() {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <section className="flex flex-row justify-center items-center">
        <div className="">
          <section className="flex flex-col gap-4 pb-4">
            <h2 className="text-xl ml-left-33 mr-right-25 text-customPurple relative">
              <img
                className="absolute top-1/2 right-full"
                src={line}
                alt="line"
              />
              {heroData.name}
            </h2>

            <h1 className="ml-left-25 mr-right-25 text-title  text-5xl md:text-7xl">
              {heroData.role}
            </h1>
          </section>
          <p className="text-lg ml-left-25 mr-right-25  text-customGray">
            {heroData.description}
          </p>
          <section className="flex md:flex-row md:pt-10  md:justify-center items-center gap-4 pt-8 flex-col  ">
            <button className="text-white bg-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
              {heroData.hireMeButton}
            </button>
            <a href={heroData.githubLink}>
              <button className="flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
                <img className="mr-1" src={git}></img>
                {heroData.githubLabel}
              </button>
            </a>
            <a href={heroData.linkedinLink}>
              <button className="flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
                <img className="mr-1" src={linkedin}></img>
                {heroData.linkedinLabel}
              </button>
            </a>
          </section>
        </div>
        <div className="flex justify-start items-start">
          <img className="" src={img} alt="hero" />
        </div>
      </section>
    </div>
  );
}
