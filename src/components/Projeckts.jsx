import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Projeckts() {
  const { language } = useContext(LanguageContext);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // İlk 3 projeyi göstermek için slice kullanıyoruz
  const visibleProjects = data[language].projecktsData.slice(0, 3);
  const allProjects = data[language].projecktsData;

  const toggleShowAllProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  const handleCloseModal = () => {
    setShowAllProjects(false);
    setActiveProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (showAllProjects || activeProject !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showAllProjects, activeProject]);

  // Açıklamayı 20 kelimeyle sınırlandıran fonksiyon
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return description;
  };

  const isDescriptionLong = (description) => {
    return description.split(' ').length > 20;
  };

  return (
    <section className="bg-white dark:bg-dark">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 mx-auto h-64 ml-left-5">
        {data[language].projectTitle}
      </h2>
      <div className="flex md:flex-row justify-around md:gap-20 ml-left-5 mr-right-5 text-title flex-col items-center gap-8">
        {visibleProjects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <img
              className="md:w-300 md:h-180 w-full h-auto border border-gray-300 rounded-lg"
              src={project.image}
              alt={project.title}
            />
            <h3 className="dark:text-darkSubTitle text-3xl text-customPurple1 font-medium py-2 items-center">
              {project.title}
            </h3>
            <p className="dark:text-darkFont text-sm font-normal text-customGray p-[5px] items-center">
              {truncateDescription(project.description)}
              {isDescriptionLong(project.description) && (
                <button
                  className="text-customPurple underline ml-2"
                  onClick={() => setActiveProject(index)}
                >
                  {data[language].projectButtons.readMore}
                </button>
              )}
            </p>
            <div className="flex md:flex-row p-[5px] gap-[5px] flex-col items-center">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="dark:text-[#E1E1FF] dark:bg-[#383838] flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2"
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row justify-between">
              <a
                className="dark:text-[#E1E1FF] text-base font-medium leading-6 text-customPurple py-5 underline"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="dark:text-[#E1E1FF] text-base font-medium leading-6 text-customPurple py-5 underline"
                href={project.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* "Devamını Gör" butonu */}
      {data[language].projecktsData.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 bg-customPurple1 text-white font-semibold rounded-lg hover:bg-customPurple2"
            onClick={toggleShowAllProjects}
          >
            {showAllProjects
              ? data[language].projectButtons.close
              : data[language].projectButtons.seeMore}
          </button>
        </div>
      )}

      {/* Tüm projeler için modal */}
      {showAllProjects && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg max-w-4xl w-full overflow-y-auto h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 mb-8 text-center">
              {data[language].projectTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, index) => (
                <div key={index} className="flex flex-col">
                  <img
                    className="md:w-300 md:h-180 w-full h-auto border border-gray-300 rounded-lg"
                    src={project.image}
                    alt={project.title}
                  />
                  <h3 className="dark:text-darkSubTitle text-3xl text-customPurple1 font-medium py-2 items-center">
                    {project.title}
                  </h3>
                  <p className="dark:text-darkFont text-sm font-normal text-customGray p-[5px] items-center">
                    {truncateDescription(project.description)}
                    {isDescriptionLong(project.description) && (
                      <button
                        className="text-customPurple underline ml-2"
                        onClick={() => setActiveProject(index)}
                      >
                        {data[language].projectButtons.readMore}
                      </button>
                    )}
                  </p>
                  <div className="flex md:flex-row p-[5px] gap-[5px] flex-col items-center">
                    {project.technologies.map((tech, index) => (
                      <p
                        key={index}
                        className="dark:text-[#E1E1FF] dark:bg-[#383838] flex flex-row text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-row justify-between">
                    <a
                      className="dark:text-[#E1E1FF] text-base font-medium leading-6 text-customPurple py-5 underline"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      className="dark:text-[#E1E1FF] text-base font-medium leading-6 text-customPurple py-5 underline"
                      href={project.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-3 bg-customPurple1 text-white font-semibold rounded-lg hover:bg-customPurple2"
                onClick={handleCloseModal}
              >
                {data[language].projectButtons.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Aktif proje için modal */}
      {activeProject !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg max-w-2xl w-full overflow-y-auto h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="dark:text-darkSubTitle text-title font-semibold text-4xl leading-10 mb-4 text-center">
              {allProjects[activeProject].title}
            </h2>
            <img
              className="md:w-300 md:h-180 w-full h-auto border border-gray-300 rounded-lg mb-4"
              src={allProjects[activeProject].image}
              alt={allProjects[activeProject].title}
            />
            <p className="dark:text-darkFont text-sm font-normal text-customGray mb-4">
              {allProjects[activeProject].description}
            </p>
            <div className="flex md:flex-row mb-4 gap-[5px] flex-wrap items-center">
              {allProjects[activeProject].technologies.map((tech, index) => (
                <p
                  key={index}
                  className="dark:text-[#E1E1FF] dark:bg-[#383838] text-customPurple border-2 border-customPurple rounded-md text-sm font-medium leading-4 px-5 py-2"
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row justify-between mb-4">
              <a
                className="dark:text-[#E1E1FF] text-base font-medium leading-6 text-customPurple underline"
                href={allProjects[activeProject].githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="dark:text-[#E1E1FF] text-base font-medium leading-6 text-customPurple underline"
                href={allProjects[activeProject].linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
            <div className="flex justify-center">
              <button
                className="px-6 py-3 bg-customPurple1 text-white font-semibold rounded-lg hover:bg-customPurple2"
                onClick={handleCloseModal}
              >
                {data[language].projectButtons.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
