import { Link, navigate } from 'gatsby';
import React from 'react';
import * as styles from './AccountNav.module.css';

const AccountNav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem('key');
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/orders/'}
          className={styles.webLink}
        >
          Mis Pedidos
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/address/'}
          className={styles.webLink}
        >
          Direcciones
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/settings/'}
          className={styles.webLink}
        >
          Configuración
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/viewed/'}
          className={styles.webLink}
        >
          Visto Recientemente
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          Cerrar Sesión
        </span>
      </div>
    </div>
  );
};

export default AccountNav;
