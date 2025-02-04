import { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';

export default function Skill() {
  const { language } = useContext(LanguageContext);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const handleCloseModal = () => {
    setShowAllSkills(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="custom-dots-container">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="bg-white dark:bg-dark pt-16 overflow-hidden">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 mb-8 text-center">
        {data[language].skillData.title}
      </h2>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {data[language].skillData.skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="skillsCard relative mx-auto h-auto lg:h-36 lg:w-xl bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                {/* Icon in the top-right corner */}
                <img
                  src={skill.icon}
                  alt={`${skill.title} icon`}
                  className="absolute top-4 right-4 w-8 h-8"
                />
                <h3 className="dark:text-darkSubTitle font-medium text-customPurple1 text-2xl py-2">
                  {skill.title}
                </h3>
                <p className="dark:text-darkFont text-gray-700 font-normal text-base">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Hepsini Gör Butonu */}
        <div className="flex justify-center mt-16">
          <button
            className="px-10 py-4 bg-customPurple1 text-white font-semibold rounded-full hover:bg-customPurple transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
            onClick={() => setShowAllSkills(true)}
          >
            {language === 'tr' ? 'Tümünü Gör' : 'See All'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tüm Yetenekler Modalı */}
      {showAllSkills && (
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
                {data[language].skillData.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data[language].skillData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 dark:bg-gray-700 group-hover:bg-customPurple1 group-hover:text-white transition-all duration-300">
                        <img src={skill.icon} alt={skill.title} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-customPurple dark:text-darkSubTitle mb-1">
                          {skill.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {skill.description}
                        </p>
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
                  {language === 'tr' ? 'Kapat' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr className="my-16 border-t border-line" />
    </section>
  );
}
