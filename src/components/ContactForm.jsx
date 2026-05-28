import { useContext, useState } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data.jsx';
import emailjs from '@emailjs/browser';
import AnimatedSection from './AnimatedSection';

export default function ContactForm() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', note: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const contactData = data[language].contactFormData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await emailjs.send('service_q8ppv8h', 'template_jcj75rh', formData, '_qFwa_D48L5CJ4ZqH');
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', note: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch {
      setError(language === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = `w-full px-4 py-3.5 rounded-xl
    bg-gray-50 dark:bg-gray-800/80
    border border-gray-200 dark:border-gray-700/60
    text-gray-900 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:border-violet-500 dark:focus:border-violet-500
    focus:ring-2 focus:ring-violet-500/20
    transition-all duration-200 text-sm`;

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50 dark:bg-[#0a0818]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-100 dark:bg-violet-900/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-100 dark:bg-amber-900/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
              {language === 'tr' ? 'Hadi konuşalım' : "Let's talk"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple dark:text-white">
              {contactData.title}
            </h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-violet-600 to-amber-500 rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="rounded-3xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-violet-500/20 shadow-xl shadow-violet-500/5 p-8 md:p-10">

              {error && (
                <div className="mb-6 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 text-red-600 dark:text-red-400 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {isSubmitted && (
                <div className="mb-6 px-4 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/40 text-green-600 dark:text-green-400 rounded-xl text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {contactData.successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {contactData.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      {field.label}
                      {field.required && <span className="text-amber-500 ml-1">*</span>}
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
                        className={`${inputClass} resize-none`}
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
                        className={inputClass}
                      />
                    )}
                  </div>
                ))}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl
                      hover:shadow-xl hover:shadow-violet-500/30 hover:scale-[1.02]
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none
                      transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {language === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        {contactData.submitButton}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-violet-200 dark:via-violet-800/30 to-transparent" />
    </section>
  );
}
