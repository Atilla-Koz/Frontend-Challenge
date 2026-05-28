import { useContext, useState, forwardRef } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';
import AnimatedSection from './AnimatedSection';

const Profile = forwardRef((props, ref) => {
  const { language } = useContext(LanguageContext);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const profile = data[language].profileData;

  return (
    <section ref={ref} id="about" className="relative py-20 overflow-hidden bg-gray-50 dark:bg-[#0a0818]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100 dark:bg-violet-900/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
              {language === 'tr' ? 'Ben kimim?' : 'Who am I?'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple dark:text-white">
              {profile.personalInfo.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-600 to-amber-500 rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Personal info card — full width on mobile, 1 col on desktop */}
          <AnimatedSection direction="left" className="lg:col-span-1">
            <div className="h-full rounded-3xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-violet-500/20 shadow-sm p-6 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-3">
                {language === 'tr' ? 'Hakkımda' : 'About'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-6">
                {profile.personalInfo.description}
              </p>
              <button
                onClick={() => setShowFullDescription(true)}
                className="mt-4 inline-flex items-center gap-1.5 text-violet-600 dark:text-violet-400 text-sm font-medium hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
              >
                {language === 'en' ? 'Read More' : 'Devamını Oku'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Interests */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  {profile.interests.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.items.map((interest, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-300 rounded-full text-xs font-medium border border-violet-100 dark:border-violet-800/30"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Experience + Education — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Experience */}
            <AnimatedSection direction="right" delay={100}>
              <div className="rounded-3xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-violet-500/20 shadow-sm p-6 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {profile.experience.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {profile.experience.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{item.role}</p>
                        <p className="text-violet-600 dark:text-violet-400 text-sm">{item.company}</p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{item.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection direction="right" delay={200}>
              <div className="rounded-3xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-violet-500/20 shadow-sm p-6 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {profile.education.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {profile.education.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 hover:bg-violet-50 dark:hover:bg-violet-900/10 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{item.degree}</p>
                        <p className="text-violet-600 dark:text-violet-400 text-sm">{item.school}</p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{item.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Full description modal */}
      {showFullDescription && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowFullDescription(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-900 px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800 rounded-t-3xl flex items-center justify-between">
              <h3 className="text-xl font-bold text-gradient-purple dark:text-white">
                {profile.personalInfo.title}
              </h3>
              <button
                onClick={() => setShowFullDescription(false)}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                {profile.personalInfo.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-amber-200 dark:via-amber-800/20 to-transparent" />
    </section>
  );
});

Profile.displayName = 'Profile';
export default Profile;
