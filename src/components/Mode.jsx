import { useState, useEffect } from 'react';
import { modeData } from './data';

export default function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

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
            onChange={handleToggle}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-customPurple"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {modeData.darkModeLabel}
          </span>
        </label>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {modeData.translationText}
        </p>
      </div>
    </div>
  );
}
