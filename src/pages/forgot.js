import React, { useState } from 'react';
import { validateEmail } from '../helpers/general';
import * as styles from './forgot.module.css';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';
import AttributeGrid from '../components/AttributeGrid';

const ForgotPage = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) !== true) {
      setError('Ingresa una dirección de correo válida');
      return;
    }
    setEmail('');
    setError('');
  };

  return (
    <Layout disablePaddingBottom>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Boost your business with AI! Shop at Juan Jaramillo's premier AI services store for top-tier consulting, comprehensive courses, and innovative generative image solutions."
        />
        <meta
          name="keywords"
          content="Juan Jaramillo, artificial intelligence, machine learning, prompt engineer, AI projects, developer, digital marketing, AI expert"
        />
        <meta
          property="og:image"
          content="https://juanjaramillo.s3.amazonaws.com/assets/og-image.png"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/forgot" />
        <title>
          Restablece tu Contraseña | Juan Jaramillo | Productos y Servicios de
          IA · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <div className={styles.root}>
        <h1 className={styles.title}>Restablece tu Contraseña</h1>
        <p className={styles.message}>
          Introduce tu dirección de correo electrónico para solicitar una nueva
          contraseña. Se te enviará un enlace para verificar tu dirección de
          email.
        </p>
        <form
          className={styles.formContainer}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormInputField
            id={'email'}
            value={email}
            handleChange={(_, e) => setEmail(e)}
            type={'email'}
            labelName={'Correo electrónico'}
            error={error}
          />
          <div className={styles.buttonContainer}>
            <Button fullWidth level={'primary'} type={'submit'}>
              restablece tu contraseña
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPage;
