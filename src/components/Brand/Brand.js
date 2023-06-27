import React from 'react';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';
import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      
      <Link
        className='linkLogoYTaglineJuanjaramillo'
        href="/"
      >
        <img
          className={styles.logojuanjaramillo}
          alt="Logo juan jaramillo"
          src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/logo-juan-jaramillo@2x.png"
        />
        <p className={styles.taglinetienda}>
          Tienda en Línea de Productos y Servicios de IA.
        </p>
      </Link>
    </div>
  );
};

export default Brand;
