import { useContext, useState } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';

export default function ContactForm() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    note: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-purple-50/50 to-white dark:from-dark dark:via-purple-900/5 dark:to-dark py-20 overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-customPurple to-customPurple1 dark:from-purple-400 dark:to-purple-600">
              {data[language].contactFormData.title}
            </span>
          </h2>

          {isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
              <p className="text-green-700 dark:text-green-300 text-lg">
                {data[language].contactFormData.successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {data[language].contactFormData.fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  )}
                </div>
              ))}

              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-customPurple to-customPurple1 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="relative z-10">
                    {data[language].contactFormData.submitButton}
                  </span>
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
