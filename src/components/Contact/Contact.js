import Button from '../Button';
import React, { useState } from 'react';
import * as styles from './Contact.module.css';

function Contact() {
  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    fetch('https://hooks.zapier.com/hooks/catch/15793138/3ds9uwv/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Teléfono</h4>
        <p>
        <a className={styles.linkDestacado} href="tel:+57 (321) 885 6199" target="_blank">
          +57 (321) 885 6199
          </a>
        </p>
        <p>Lúnes a Viernes - 9am - 5pm</p>
      </div>

      <div className={styles.section}>
        <h4>Correo Electrónico</h4>
        <p>
          Puedes enviar un correo electrónico a nuestro equipo de Servicio al
          Cliente a{' '}
          <a className={styles.linkDestacado} href="mailto:info@juanjaramillo.tech" target="_blank">
            info@juanjaramillo.tech
          </a>
        </p>
      </div>
      <div className={styles.section}>
        <h4>Envíanos un Mensaje</h4>
        <p>
          Te responderemos en menos de un minuto. ¡En serio, compruébalo! 😉
        </p>
      </div>
      <div className={styles.contactContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactForm}>
            <div className={styles.formField}>
              <label className={styles.label}>
                <span>*</span>
              </label>
              <input
                type="text"
                name="nombres"
                value={form.nombres}
                onChange={handleChange}
                className={styles.input}
                placeholder="Nombres"
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.label}>
                <span>*</span>
              </label>
              <input
                type="text"
                name="apellidos"
                value={form.apellidos}
                onChange={handleChange}
                className={styles.input}
                placeholder="Apellidos"
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.label}>
                <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Correo Electrónico"
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.label}>
                <span>*</span>
              </label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className={styles.input}
                placeholder="Teléfono"
              />
            </div>
          </div>
          <div className={styles.formField}>
            <label className={styles.label}>
              <span></span>
            </label>
            <input
              type="textarea"
              name="comentarios"
              value={form.comentarios}
              onChange={handleChange}
              className={styles.textarea}
              placeholder="¿Preguntas, dudas o sugerencias acerca de productos o servicios de la Tienda?"
            />
          </div>
          <div className={styles.marginTop}>
            <Button
              className={styles.customButton}
              level={'primary'}
              type="submit"
            >
              enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
