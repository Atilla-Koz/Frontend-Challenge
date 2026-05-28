import { useContext, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';
import AnimatedSection from './AnimatedSection';

export default function Skill() {
  const { language } = useContext(LanguageContext);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-dark">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-100 dark:bg-violet-900/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-100 dark:bg-amber-900/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4">
              {language === 'tr' ? 'Ne biliyorum?' : 'What I know'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple dark:text-white">
              {data[language].skillData.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-600 to-amber-500 rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Slider {...settings}>
            {data[language].skillData.skills.map((skill, index) => (
              <div key={index} className="p-3">
                <div className="group relative h-40 rounded-2xl overflow-hidden cursor-default
                  bg-white dark:bg-gray-800/50
                  border border-gray-100 dark:border-violet-500/20
                  shadow-sm hover:shadow-xl hover:shadow-violet-500/10
                  transition-all duration-400 hover:-translate-y-1"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-amber-500/0 group-hover:from-violet-600/5 group-hover:to-amber-500/5 transition-all duration-400" />

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={skill.icon} alt={skill.title} className="w-6 h-6" />
                  </div>

                  <div className="p-5 pt-6">
                    <h3 className="font-semibold text-violet-700 dark:text-violet-300 text-xl mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </div>
              </div>
            ))}
          </Slider>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllSkills(true)}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105 transition-all duration-300"
            >
              {language === 'tr' ? 'Tümünü Gör' : 'See All'}
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* All skills modal */}
      {showAllSkills && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowAllSkills(false)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800 rounded-t-3xl z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gradient-purple dark:text-white">
                    {data[language].skillData.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {data[language].skillData.skills.length} {language === 'tr' ? 'teknoloji' : 'technologies'}
                  </p>
                </div>
                <button
                  onClick={() => setShowAllSkills(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data[language].skillData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-violet-300 dark:hover:border-violet-500/40 hover:shadow-md hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm group-hover:shadow-violet-500/20 group-hover:scale-110 transition-all duration-300">
                      <img src={skill.icon} alt={skill.title} className="w-7 h-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {skill.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 line-clamp-2 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-violet-200 dark:via-violet-800/30 to-transparent" />
    </section>
  );
}
