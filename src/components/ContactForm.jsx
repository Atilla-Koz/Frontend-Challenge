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
    <section className="bg-white dark:bg-dark pt-16 overflow-hidden">
      <h2 className="dark:text-darkSubTitle text-title font-semibold text-5xl leading-12 mb-8 text-center">
        {data[language].contactFormData.title}
      </h2>
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          {data[language].contactFormData.fields.map((field) => (
            <div key={field.name} className="mb-6">
              <label
                htmlFor={field.name}
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200 resize-none min-h-[120px]"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 outline-none transition-all duration-200"
                />
              )}
            </div>
          ))}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-customPurple1 text-white font-semibold rounded-full hover:bg-customPurple transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {data[language].contactFormData.submitButton}
            </button>
          </div>
        </form>
      </div>
      <hr className="my-16 border-t border-line" />
    </section>
  );
}
