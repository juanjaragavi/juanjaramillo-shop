import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = () => {

  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
});

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
        <form onSubmit={handleSubmit}>
          <div className={styles.contactForm}>
            <FormInputField
              id={'name'}
              value={form.name}
              onChange={handleChange}
              type={'text'}
              labelName={'Nombre'}
              required
            />
            <FormInputField
              id={'lastName'}
              value={form.lastName}
              onChange={handleChange}
              type={'text'}
              labelName={'Apellido'}
              required
            />
            <FormInputField
              id={'phone'}
              value={form.phone}
              onChange={handleChange}
              type={'number'}
              labelName={'Número de Teléfono'}
              required
            />
            <FormInputField
              id={'email'}
              value={form.email}
              onChange={handleChange}
              type={'email'}
              labelName={'Correo Electrónico'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'comment'}
                value={form.comment}
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
            type={'buttonSubmit'}
          >
            enviar
          </Button>
        </form>
        <form onSubmit={handleSubmit} netlify>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("nombres", {
                required: true,
                })}
                className="spartan-medium campo-formulario-contacto transiciones peer"
                value={form.nombres}
                onChange={handleChange}
                type="text"
                name="nombres"
                id="nombres"
                placeholder={t("NombresFormContacto.title", { framework: "React" })}
            />
            {errors.nombres?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("apellidos", {
                required: true,
                })}
                className="spartan-medium campo-formulario-contacto transiciones peer"
                value={form.apellidos} 
                onChange={handleChange}
                type="text"
                name="apellidos"
                id="apellidos"
                placeholder={t("ApellidosFormContacto.title", {
                framework: "React",
                })}
            />
            {errors.apellidos?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
                className="spartan-medium campo-formulario-contacto transiciones peer"
                value={form.email} 
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder={t("EmailFormContacto.title", { framework: "React" })}
            />
            {errors.email?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            {errors.email?.type === "pattern" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("telefono", {
                maxLength: 10,
                minLength: 10,
                required: true,
                type: number,
                })}
                className="spartan-medium campo-formulario-contacto transiciones peer"
                value={form.telefono} 
                onChange={handleChange}
                type="number"
                name="telefono"
                id="telefono"
                placeholder={t("TelefonoFormContacto.title", {
                framework: "React",
                })}
            />
            {errors.telefono?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            {errors.telefono?.type === "minLength" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("MinCharFormContacto.title", { framework: "React" })}
                </p>
            )}
            {errors.telefono?.type === "maxLength" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("MaxCharFormContacto.title", { framework: "React" })}
                </p>
            )}
            </div>
            <div className="contenedor-botones-formulario-contacto">
            <button
                className="spartan-medium boton-enviar-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="submit"
            >
                {t("BtnEnviarFormContacto.title", { framework: "React" })}
            </button>
            <button
                className="spartan-medium boton-restablecer-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="button"
                onClick={handleResetClick}
            >
                {t("BtnResetFormContacto.title", { framework: "React" })}
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
