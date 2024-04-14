import img from '../assets/hero/image 1.png';
import git from '../assets/hero/github.png';
import linkedin from '../assets/hero/LinkedIn.png';
import line from '../assets/hero/Line 11.png';

export default function Hero() {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <section className="flex flex-row justify-center items-center">
        <div className="heroText">
          <section className="flex flex-col gap-4 pb-4">
            <h2 className="text-xl ml-left-33 mr-right-25 text-customPurple relative">
              <img
                className="absolute top-1/2 right-full"
                src={line}
                alt="line"
              />
              Atilla Köz
            </h2>

            <h1 className="ml-left-25 mr-right-25 text-title  text-5xl md:text-7xl">
              Frontend Developer
            </h1>
          </section>
          <p className="text-lg ml-left-25 mr-right-25  text-customGray">
            Hi, I'm Almila. I'm a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let's shake hands with me.
          </p>
          <section className="flex md:flex-row md:pt-10  md:justify-center items-center gap-4 pt-8 flex-col  ">
            <button className="text-white bg-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
              Hire Me
            </button>
            <a href="https://github.com/Atilla-Koz">
              <button className="flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
                <img className="mr-1" src={git}></img>GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/">
              <button className="flex flex-row text-customPurple border-2 border-customPurple rounded-lg text-lg font-medium leading-7 px-5 py-2">
                <img className="mr-1" src={linkedin}></img>Linkdin
              </button>
            </a>
          </section>
        </div>
        <div className="flex justify-start items-start">
          <img className="heroImg" src={img} alt="hero" />
        </div>
      </section>
    </div>
  );
}
