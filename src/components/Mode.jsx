import { useEffect, useContext } from 'react';
import { ModeContext } from '../globalState/ModeContext';
import { LanguageContext } from '../globalState/LanguageContext';

import axios from 'axios';

export default function Mode() {
  const { isDarkMode, toggleDarkMode } = useContext(ModeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  useEffect(() => {
    // Dark mode durumu değiştiğinde, bu durumu local storage'a kaydet
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    axios
      .post('https://reqres.in/api/pizza', { language, isDarkMode })
      .then((response) => {
        console.log('API Response:', response.data);
      })
      .catch((error) => {
        console.error('API Request Error:', error);
      });
  }, [isDarkMode, language]);

  return (
    <div className="flex flex-row justify-around pt-4 pb-4">
      <div></div>
      <div className="flex flex-row gap-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            defaultChecked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-customPurple"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
        </label>
        <button
          onClick={toggleLanguage}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {language === 'en' ? "Türkçe'ye Çevir" : 'Translate to English'}
        </button>
      </div>
    </div>
  );
}
