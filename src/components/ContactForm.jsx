import { useState, useContext } from 'react';
import { LanguageContext } from '../globalState/LanguageContext';
import { data } from './data';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const { language } = useContext(LanguageContext);
  const contactData = data[language].contactFormData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gönderim sırasında loading bildirimi göster
    const loadingToastId = toast.loading('Sending your message...');

    emailjs
      .send(
        'service_q8ppv8h', // EmailJS Service ID
        'template_jcj75rh', // EmailJS Template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          note: formData.note,
        },
        '_qFwa_D48L5CJ4ZqH' // EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          // Loading toast'ı güncelle ve başarılı mesaj göster
          toast.update(loadingToastId, {
            render: 'Thank you for reaching out! I will get back to you soon.',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          });
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            note: '',
          });
        },
        (error) => {
          console.error('Error:', error.text);
          // Loading toast'ı güncelle ve hata mesajı göster
          toast.update(loadingToastId, {
            render: 'Failed to send your message. Please try again later.',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section className="bg-white dark:bg-dark py-12" id="contact">
      <h2 className="text-4xl font-semibold text-center mb-8 dark:text-white">
        {contactData.title}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
      >
        {contactData.fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label
              htmlFor={field.name}
              className="block text-lg font-medium mb-2 dark:text-white"
            >
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple"
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-customPurple text-white font-semibold text-lg rounded-lg hover:bg-customPurple2 transition"
        >
          {contactData.submitButton}
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}
