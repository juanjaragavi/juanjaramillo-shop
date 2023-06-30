import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Envíanos un Mensaje</h4>
        <p>
          Te responderemos en el menor tiempo posible.
        </p>
      </div>

      <div className={styles.section}>
        <h4>Teléfono</h4>
        <p>+57 (321) 885 6199</p>
        <p>Lúnes a Viernes - 9am - 5pm</p>
      </div>

      <div className={styles.section}>
        <h4>Correo Electrónico</h4>
        <p>
        Puedes enviar un correo electrónico a nuestro equipo de Servicio al Cliente a <a href='mailto:info@juanjaramillo.tech' target="_blank">info@juanjaramillo.tech</a> o a través del formulario de contacto que está a continuación:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={contactForm.name}
              handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Nombre Completo'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'Número de Teléfono'}
              required
            />
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Correo Electrónico'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Comentarios / Preguntas'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
