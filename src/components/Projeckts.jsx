import { projecktsData } from './data';

export default function Projeckts() {
  return (
    <section className=" bg-white dark:bg-black">
      <h2 className="text-title  font-semibold text-5xl leading-12 w-1039 h-64 ml-left-5">
        Projeckts
      </h2>
      <div className="flex md:flex-row justify-around md:gap-20 ml-left-5 mr-right-5 text-title flex-col items-center gap-8 ">
        {projecktsData.map((project, index) => (
          <div key={index} className="flex flex-col">
            <img
              className="md:w-300 md:h-180 w-full h-auto"
              src={project.image}
              alt={project.title}
            />
            <h3 className="text-3xl text-customPurple1 font-medium py-2 items-center">
              {project.title}
            </h3>
            <p className="text-sm font-normal text-customGray p-[5px] items-center">
              {project.description}
            </p>
            <div className="flex md:flex-row p-[5px] gap-[5px] flex-col items-center">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2"
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row justify-between">
              <a
                className="text-base font-medium leading-6 text-customPurple  py-5 underline"
                href={project.githubLink}
              >
                GitHub
              </a>
              <a
                className="text-base font-medium leading-6 text-customPurple  py-5 underline"
                href={project.linkedinLink}
              >
                Linkedin
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
