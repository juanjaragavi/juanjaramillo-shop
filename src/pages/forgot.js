import React, { useState } from 'react';
import { validateEmail } from '../helpers/general';
import * as styles from './forgot.module.css';

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
      <div className={styles.root}>
        <h1 className={styles.title}>Restablece tu Contraseña</h1>
        <p className={styles.message}>
        Introduce tu dirección de correo electrónico para solicitar una nueva contraseña. Se te enviará un enlace para verificar tu dirección de email.
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
