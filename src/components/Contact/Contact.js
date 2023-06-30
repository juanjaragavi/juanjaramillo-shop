import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = () => {

  const [form, setForm] = useState({ nombres: "", apellidos: "", email: "", telefono: "", comentario: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    const formData = new URLSearchParams();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    
    fetch('https://hooks.zapier.com/hooks/catch/15793138/3ds9uwv/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Envíanos un Mensaje</h4>
        <p>
          Te responderemos en menos de un minuto. ¡En serio, compruébalo! 😉  
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
        <form onSubmit={handleSubmit}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'nombres'}
              name={'nombres'}
              value={form.nombres}
              onChange={handleChange}
              type={'text'}
              labelName={'Nombre Completo'}
              required
            />
            <FormInputField
              id={'apellidos'}
              name={'apellidos'}
              value={form.apellidos}
              onChange={handleChange}
              type={'text'}
              labelName={'Apellidos'}
              required
            />
            <FormInputField
              id={'email'}
              name={'email'}
              value={form.email}
              onChange={handleChange}
              type={'email'}
              labelName={'Correo Electrónico'}
              required
            />
            <FormInputField
              id={'telefono'}
              name={'telefono'}
              value={form.telefono}
              onChange={handleChange}
              type={'number'}
              labelName={'Teléfono'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comentario'}
                name={'comentario'}
                value={form.comentario}
                onChange={handleChange}
                type={'textarea'}
                labelName={'Comentarios / Preguntas'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'submit'}
          >
            enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
