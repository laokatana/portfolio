import React, { useState } from 'react';
import useContactForm from '../hooks/useContactForm';
import { forwardRef } from 'react';
import {
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterItem,
  FormContainer,
  Label,
  FooterText,
  TextArea,
  SubmitButton,
  Input,
  mezcladito2,
} from './Footer.Styled';

const Footer = forwardRef((props, ref) => {
  const { formData, success, handleChange, handleSubmit } = useContactForm();

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
        © 2025 - Lao Larragueta.
        <br />
        Email:lao.tech.software@gmail.com
      </FooterText>
    </FooterContainer>
  );
});

export default Footer;
