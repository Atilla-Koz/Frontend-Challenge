import { useContext, useState } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function Profile() {
  const { language } = useContext(LanguageContext);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <section id="about" className="relative bg-gradient-to-b from-white via-purple-50/50 to-white dark:from-dark dark:via-purple-900/5 dark:to-dark py-20 overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-customPurple to-customPurple1 dark:from-purple-400 dark:to-purple-600">
              {data[language].headerData.about}
            </span>
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Dekoratif arka plan deseni */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* İçerik Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Sol Kolon - Bilgiler */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-customPurple dark:text-purple-400">
                    {data[language].profileData.personalInfo.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {data[language].profileData.personalInfo.description}
                  </p>
                  <button
                    onClick={() => setShowFullDescription(true)}
                    className="mt-4 text-customPurple1 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium flex items-center gap-2 transition-colors duration-300"
                  >
                    {language === 'en' ? 'Read More' : 'Daha Fazla Oku'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-customPurple dark:text-purple-400">
                    {data[language].profileData.experience.title}
                  </h4>
                  {data[language].profileData.experience.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                      <h5 className="font-medium text-gray-800 dark:text-gray-200">{item.role}</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.company}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">{item.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ Kolon - Eğitim ve İlgi Alanları */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-customPurple dark:text-purple-400">
                    {data[language].profileData.education.title}
                  </h4>
                  {data[language].profileData.education.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md transition-all duration-300">
                      <h5 className="font-medium text-gray-800 dark:text-gray-200">{item.degree}</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.school}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">{item.period}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-customPurple dark:text-purple-400">
                    {data[language].profileData.interests.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data[language].profileData.interests.items.map((interest, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-customPurple dark:text-purple-300 rounded-full text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-800/30 transition-colors duration-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detaylı Açıklama Modal */}
      {showFullDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowFullDescription(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-customPurple dark:text-purple-400">
                {data[language].profileData.personalInfo.title}
              </h3>
              <button
                onClick={() => setShowFullDescription(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {data[language].profileData.personalInfo.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
