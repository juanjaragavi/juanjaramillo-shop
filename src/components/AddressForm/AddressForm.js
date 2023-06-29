import React, { useState } from 'react';
import * as styles from './AddressForm.module.css';

import Button from '../Button';
import FormInputField from '../FormInputField';

const AddressForm = (props) => {
  const { closeForm } = props;

  const initialState = {
    name: '',
    address: '',
    state: '',
    postal: '',
    country: '',
    company: '',
  };

  const errorState = {
    name: '',
    address: '',
    state: '',
    postal: '',
    country: '',
    company: '',
  };

  const [form, setForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...form, [id]: e };
    setForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorForm(errorState);
    closeForm();
  };

  return (
    <div className={styles.root}>
      <form className={styles.inputContainer} onSubmit={(e) => handleSubmit(e)}>
        <FormInputField
          id={'name'}
          value={form.name}
          handleChange={(id, e) => handleChange(id, e)}
          type={'input'}
          labelName={'Nombre'}
          error={errorForm.name}
        />
        <FormInputField
          id={'address'}
          value={form.address}
          handleChange={(id, e) => handleChange(id, e)}
          type={'input'}
          labelName={'Dirección'}
          error={errorForm.address}
        />
        <FormInputField
          id={'country'}
          value={form.country}
          handleChange={(id, e) => handleChange(id, e)}
          type={'input'}
          labelName={'País'}
          error={errorForm.country}
        />
        <FormInputField
          id={'state'}
          value={form.state}
          handleChange={(id, e) => handleChange(id, e)}
          type={'input'}
          labelName={'Departamento o Estado'}
          error={errorForm.state}
        />
        <FormInputField
          id={'postal'}
          value={form.postal}
          handleChange={(id, e) => handleChange(id, e)}
          type={'number'}
          labelName={'Código Postal'}
          error={errorForm.postal}
        />
        <FormInputField
          id={'address'}
          value={form.address}
          handleChange={(id, e) => handleChange(id, e)}
          type={'input'}
          labelName={'Indicaciones o Notas'}
          error={errorForm.address}
        />
        <div className={styles.actionContainers}>
          <Button fullWidth type={'submit'} level={'primary'}>
            Guardar
          </Button>
          <Button
            fullWidth
            type={'button'}
            onClick={closeForm}
            level={'secondary'}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
