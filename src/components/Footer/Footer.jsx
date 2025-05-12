import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { forwardRef } from 'react';

const mezcladito2 = keyframes`
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.7;
    transform: translateY(1px);
  }
`;

const FooterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-position: center bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 0 10px;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);

  @media (max-width: 770px) {
    background-size: 100%;
    height: 100vh;
  }

  @media (max-width: 480px) {
    background-size: 350%;
  }
`;

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.5rem;
  padding: 2rem 10px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 4rem;
    margin-top: 1rem;
  }
`;

const FooterTitle = styled.p`
  font-size: 3rem;
  color: rgba(201, 185, 42, 0.91);
  text-shadow: 1px 1px 1px #da2323;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FooterItem = styled.a`
  color: #e2d9e4;
  text-decoration: none;
  position: relative;
  &:hover {
    color: #fcd34d;
    text-shadow: 1px 1px 1px #da2323;
    border-radius: 5px;
    padding: 0.1rem;
    border: 1px solid rgba(190, 138, 27, 0.51);
  }
`;

const FooterText = styled.p`
  color: rgb(245, 240, 247);
  text-align: center;
  font-size: 1.25rem;
  padding: 0 10px;
  margin-bottom: 2rem;
  animation: ${mezcladito2} 2s ease-in-out infinite;
  animation-delay: 0.5s;
  text-shadow: 1px 1px 1px rgb(231, 216, 216);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid rgba(190, 138, 27, 0.51);
  color: #f5f5f5;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
  }
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  gap: 0.5rem;
  color: #fcd34d;
  text-shadow: 1px 1px 1px #da2323;
  F @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  border: 1px solid rgba(190, 138, 27, 0.51);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  border: 1px solid rgba(190, 138, 27, 0.51);
  color: #fff;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: transparent;
  color: rgb(212, 209, 200);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1.5rem;
  border: 1px solid rgba(190, 138, 27, 0.51);

  &:hover {
    background-color: rgba(224, 174, 11, 0.91);
    font-weight: bold;
    color: #fff;
  }
`;

const Footer = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData['bot-field']) return; // bot atrapado

    emailjs
      .send(
        'service_av3azkf', // <- Reemplazá con tu Service ID
        'template_otqfcxo', // <- Reemplazá con tu Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'tu_public_key' // <- Reemplazá con tu Public Key
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '', 'bot-field': '' });
      })
      .catch((err) => {
        console.error('Fallo al enviar email:', err);
      });
  };

  return (
    <FooterContainer>
      <FooterSection ref={ref}>
        <FooterTitle>Contacto</FooterTitle>

        <FooterItem
          href="https://www.linkedin.com/in/lao-larragueta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </FooterItem>

        <FooterItem
          href="https://github.com/laokatana"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterItem>

        {success ? (
          <p style={{ color: 'lightgreen', fontSize: '1.2rem' }}>
            ¡Gracias por tu mensaje!
          </p>
        ) : (
          <FormContainer onSubmit={handleSubmit}>
            <p hidden>
              <label>
                No llenar este campo:{' '}
                <Input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <Label>
              Nombre:
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Label>

            <Label>
              Email:
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Label>

            <Label>
              Mensaje:
              <TextArea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Label>

            <SubmitButton type="submit">Enviar</SubmitButton>

            {success && <p>Mensaje enviado correctamente 🎉</p>}
          </FormContainer>
        )}
      </FooterSection>
      <FooterText>
        © 2025 - Lao Larragueta. Diseño y desarrollo by Lao.
        <br />
      </FooterText>
    </FooterContainer>
  );
});

export default Footer;
