import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRegCopyright,
} from 'react-icons/fa';
import useContactForm from '../hooks/useContactForm';
import { forwardRef } from 'react';
import {
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterItem,
  FooterLinksContainer,
  FormContainer,
  Label,
  FooterText,
  TextArea,
  SubmitButton,
  Input,
  StickyFooter,
  FooterTextBlock,
  FooterLinks,
} from './Footer.styled';

const Footer = forwardRef((props, ref) => {
  const { formData, success, handleChange, handleSubmit } = useContactForm();

  return (
    <FooterContainer>
      <FooterSection ref={ref}>
        <FooterTitle>Contacto</FooterTitle>

        <FooterLinksContainer>
          <FooterItem
            href="https://www.linkedin.com/in/lao-larragueta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ marginRight: '8px' }} />
            LinkedIn
          </FooterItem>

          <FooterItem
            href="https://github.com/laokatana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ marginRight: '8px' }} />
            GitHub
          </FooterItem>
        </FooterLinksContainer>

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
          </FormContainer>
        )}
      </FooterSection>

      <StickyFooter>
        <FooterTextBlock>
          <FaEnvelope />
          lao.tech.software@gmail.com
        </FooterTextBlock>

        <FooterTextBlock>
          <FaRegCopyright />
          2025 - Lao Larragueta
        </FooterTextBlock>

        <FooterLinks>
          <a
            href="https://github.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </FooterLinks>
      </StickyFooter>
    </FooterContainer>
  );
});

export default Footer;
