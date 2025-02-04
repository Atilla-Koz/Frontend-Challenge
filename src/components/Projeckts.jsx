import { useContext, useState, useEffect, useCallback } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Projeckts() {
  const { language } = useContext(LanguageContext);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projectsPerSlide = 3;
  const allProjects = data[language].projecktsData;
  const totalSlides = Math.ceil(allProjects.length / projectsPerSlide);
  const slideInterval = 5000; // 5 saniye

  // Mevcut slide'daki projeleri al
  const getCurrentProjects = () => {
    const startIndex = currentSlide * projectsPerSlide;
    return allProjects.slice(startIndex, startIndex + projectsPerSlide);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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

  // Otomatik slide için useEffect
  useEffect(() => {
    let intervalId;
    if (!isPaused && !showAllProjects) {
      intervalId = setInterval(() => {
        nextSlide();
      }, slideInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, showAllProjects, nextSlide]);

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
    <section className="bg-white dark:bg-dark py-16">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl mb-16 text-center">
        {data[language].projectTitle}
      </h2>
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
          {getCurrentProjects().map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-10" />
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex flex-col gap-4 items-center">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/90 backdrop-blur-sm text-gray-800 px-8 py-3 rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Site
                    </a>
                    <div className="flex gap-4 justify-center w-full">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={project.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-customPurple1 dark:text-darkSubTitle mb-4 group-hover:text-customPurple transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {truncateDescription(project.description)}
                  {isDescriptionLong(project.description) && (
                    <button
                      className="text-customPurple dark:text-darkSubTitle hover:text-customPurple1 transition-colors duration-200 ml-2 font-medium inline-flex items-center"
                      onClick={() => setActiveProject(index + currentSlide * projectsPerSlide)}
                    >
                      {data[language].projectButtons.readMore}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 text-sm font-medium bg-purple-50 dark:bg-gray-700 text-customPurple dark:text-darkSubTitle rounded-full transition-all duration-300 hover:bg-purple-100 dark:hover:bg-gray-600 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Navigation Buttons */}
        {totalSlides > 1 && (
          <div className="flex justify-between items-center mt-12 px-4 max-w-7xl mx-auto">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-customPurple1 text-white hover:bg-customPurple transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-3">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    i === currentSlide 
                      ? 'bg-customPurple1 scale-110 ring-4 ring-purple-200 dark:ring-purple-900' 
                      : 'bg-gray-300 hover:bg-customPurple'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-customPurple1 text-white hover:bg-customPurple transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* "Devamını Gör" butonu */}
        <div className="flex justify-center mt-16">
          <button
            className="px-10 py-4 bg-customPurple1 text-white font-semibold rounded-full hover:bg-customPurple transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
            onClick={toggleShowAllProjects}
          >
            {showAllProjects ? data[language].projectButtons.close : data[language].projectButtons.seeMore}
            {!showAllProjects && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Tüm projeler için modal */}
      {showAllProjects && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <h2 className="text-4xl font-bold text-customPurple1 dark:text-darkSubTitle mb-8 text-center">
                {data[language].projectTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-80">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-10" />
                      <img
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        src={project.image}
                        alt={project.title}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                        <div className="flex flex-col gap-4 items-center">
                          <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white/90 backdrop-blur-sm text-gray-800 px-8 py-3 rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105 shadow-lg"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit Site
                          </a>
                          <div className="flex gap-4 justify-center w-full">
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                              </svg>
                              GitHub
                            </a>
                            <a
                              href={project.linkedinLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                              LinkedIn
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-customPurple dark:text-darkSubTitle mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {isDescriptionLong(project.description) ? (
                          <>
                            {truncateDescription(project.description)}
                            <button
                              className="ml-2 text-customPurple1 hover:text-customPurple dark:text-purple-400 dark:hover:text-purple-300"
                              onClick={() => setActiveProject(index)}
                            >
                              {data[language].projectButtons.readMore}
                            </button>
                          </>
                        ) : (
                          project.description
                        )}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-1.5 text-sm font-medium bg-purple-50 dark:bg-gray-700 text-customPurple dark:text-darkSubTitle rounded-full transition-all duration-300 hover:bg-purple-100 dark:hover:bg-gray-600 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  className="px-8 py-3 bg-customPurple1 text-white font-semibold rounded-full hover:bg-customPurple transition-colors duration-200 transform hover:scale-105"
                  onClick={handleCloseModal}
                >
                  {data[language].projectButtons.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Aktif proje için modal */}
      {activeProject !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-customPurple1 dark:text-darkSubTitle mb-6 text-center">
                {allProjects[activeProject].title}
              </h2>
              <img
                className="w-full h-auto rounded-lg mb-6 shadow-lg"
                src={allProjects[activeProject].image}
                alt={allProjects[activeProject].title}
              />
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {allProjects[activeProject].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {allProjects[activeProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-gray-700 text-customPurple dark:text-darkSubTitle rounded-full transition-colors duration-200 hover:bg-purple-200 dark:hover:bg-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-customPurple dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                  href={allProjects[activeProject].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  GitHub
                </a>
                <a
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-customPurple dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                  href={allProjects[activeProject].projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Site
                </a>
                <button
                  className="px-6 py-2 bg-customPurple1 text-white rounded-full hover:bg-customPurple transition-colors duration-200 flex items-center gap-2"
                  onClick={handleCloseModal}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {data[language].projectButtons.close}
                </button>
                <a
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-customPurple dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
                  href={allProjects[activeProject].linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
