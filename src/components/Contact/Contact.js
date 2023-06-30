import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = () => {
/*  
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
*/

const [form, setForm] = useState({
  nombres: "",
  apellidos: "",
  email: "",
  telefono: "",
  comentario: "",
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  const handleSubmit = e => {
    e.preventDefault();
    
    const formData = new URLSearchParams();
    for (const key in form) {
        formData.append(key, form[key]);
        }
        
        fetch('https://hooks.zapier.com/hooks/catch/15793138/3dstwhg/', {
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
          Te responderemos en un minuto (¡es literal!). 😉
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
        <form onSubmit={handleSubmit} netlify>
          <div className={styles.contactForm}>
            <FormInputField
              value={form.nombres}
              onChange={handleChange}
              type={'text'}
              name={'nombres'}
              id={'nombres'}
              labelName={'Nombre Completo'}
              required
            />
            <FormInputField
              value={form.telefono}
              onChange={handleChange}
              type={'number'}
              name={'telefono'}
              id={'telefono'}
              labelName={'Número de Teléfono'}
              required
            />
            <FormInputField
              value={form.email} 
              onChange={handleChange}
              type={'email'}
              name={'email'}
              id={'email'}
              labelName={'Correo Electrónico'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                value={form.email} 
                onChange={handleChange}
                type={'textarea'}
                name={'comentario'}
                id={'comentario'}
                labelName={'Comentarios / Preguntas'}
                placeholder={'¿Tienes una pregunta o comentario puntual con respecto a productos o servicios de la tienda? Formúlala en lenguaje natural. Por ejemplo: "¿En cuánto tiempo recibiré mi pedido?"'}
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
