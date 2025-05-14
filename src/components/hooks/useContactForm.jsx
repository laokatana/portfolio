import { useState } from 'react';
import emailjs from '@emailjs/browser';
import validateContactForm from '../utils/validateContactForm'; // <-- nuevo

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': '',
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData['bot-field']) return;

    const newErrors = validateContactForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_av3azkf',
        'template_otqfcxo',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'L5P5SpAFIUETYI3h3'
      )
      .then(() => {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          'bot-field': '',
        });
        setErrors({});
      })
      .catch((err) => {
        console.error('Fallo al enviar email:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    formData,
    success,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
