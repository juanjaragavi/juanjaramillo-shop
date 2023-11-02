import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
    >
      <Link className="linkLogoYTaglineJuanjaramillo" href="/">
        <img
          className={styles.logojuanjaramillo}
          alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
          src="https://static.files.juanjaramillo.tech/jjcontainer/logo-juan-jaramillo.webp"
        />
        <p className={styles.taglinetienda}>
          Tienda en Línea de Productos y Servicios de IA.
        </p>
      </Link>
    </div>
  );
};

export default Brand;
