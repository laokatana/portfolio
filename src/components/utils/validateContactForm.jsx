const validateContactForm = ({ name, email, message }) => {
  const errors = {};

  if (!name.trim()) {
    errors.name = 'El nombre es obligatorio';
  }

  if (!email.trim()) {
    errors.email = 'El email es obligatorio';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email inválido';
  }

  if (!message.trim()) {
    errors.message = 'El mensaje no puede estar vacío';
  }

  return errors;
};

export default validateContactForm;
