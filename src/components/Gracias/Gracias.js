import { Link, navigate } from 'gatsby';
import Button from '../Button';
import React, { useState } from 'react';
import * as styles from './Gracias.module.css';

function Gracias() {
  const goHome = () => {
    navigate('/');
  };
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>¡Muchas Gracias por tu Mensaje!</h4>
        <p>
          Revisa tu Bandeja de Entrada. Allí ya debes tener la respuesta al
          comentario que escribiste en el Formulario que enviaste.
        </p>
        <Button className={styles.customButton} level={'primary'} onClick={goHome}>
        VOLVER AL HOME
      </Button>
      </div>
    </div>
  );
}

export default Gracias;
