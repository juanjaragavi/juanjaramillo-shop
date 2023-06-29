import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './settings.module.css';

import AccountLayout from '../../components/AccountLayout';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import FormInputField from '../../components/FormInputField';
import Layout from '../../components/Layout/Layout';

import {
  validateEmail,
  validateStrongPassword,
  isAuth,
} from '../../helpers/general';

const SettingsPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const errorState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [updateForm, setUpdateForm] = useState(initialState);
  const [error, setError] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...updateForm, [id]: e };
    setUpdateForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (updateForm.email !== '') {
      if (validateEmail(updateForm.email) !== true) {
        validForm = false;
        tempError.email =
          'Please use a valid email address, such as user@example.com.';
      }
    }

    if (updateForm.password !== '') {
      if (validateStrongPassword(updateForm.password) === false) {
        validForm = false;
        tempError.password =
          'Password must have at least 8 characters, 1 lowercase, 1 uppercase and 1 numeric character.';
      }

      if (updateForm.password !== updateForm.confirmPassword) {
        validForm = false;
        tempError.confirmPassword = 'Confirm password not the same.';
      }
    }

    if (validForm === true) {
      //success
      setError(errorState);
      setUpdateForm(initialState);
    } else {
      setError(tempError);
    }
  };

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Tienda' },
            { link: '/account', label: 'Mi Cuenta' },
            { link: '/account/settings', label: 'Configuración' },
          ]}
        />
        <h1>Configuración</h1>
        <div>
          <form onSubmit={(e) => handleSubmit(e)} noValidate>
            <div className={styles.nameSection}>
              <FormInputField
                id={'firstName'}
                value={updateForm.firstName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Nombres'}
              />
              <FormInputField
                id={'lastName'}
                value={updateForm.lastName}
                handleChange={(id, e) => handleChange(id, e)}
                type={'input'}
                labelName={'Apellidos'}
              />
              <FormInputField
                id={'email'}
                value={updateForm.email}
                handleChange={(id, e) => handleChange(id, e)}
                type={'email'}
                labelName={'Correo Electrónico'}
                error={error.email}
              />
            </div>
            <div className={styles.passwordContainer}>
              <h2>Cambiar Contraseña</h2>
              <div className={styles.passwordSection}>
                <FormInputField
                  id={'password'}
                  value={updateForm.password}
                  handleChange={(id, e) => handleChange(id, e)}
                  type={'password'}
                  labelName={'Nueva Contraseña'}
                  error={error.password}
                />
                <FormInputField
                  id={'confirmPassword'}
                  value={updateForm.confirmPassword}
                  handleChange={(id, e) => handleChange(id, e)}
                  type={'password'}
                  labelName={'Confirmar Contraseña'}
                  error={error.confirmPassword}
                />
                <Button level={'primary'} type={'submit'}>
                  actualizar
                </Button>
              </div>
            </div>
          </form>
        </div>
      </AccountLayout>
    </Layout>
  );
};

export default SettingsPage;
