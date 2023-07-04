import { Link } from 'gatsby';
import React, { useContext } from 'react';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import Button from '../Button';
import Icon from '../Icons/Icon';

import * as styles from './AddNotification.module.css';

const AddNotification = (props) => {
  const sampleCartItem = {
    image: 'https://files.juanjaramillo.tech/4-tienda-online-de-juan-jaramillo.webp',
    alt: '',
    name: 'Consultoría en Inteligencia Artificial (Servicio Remoto)',
    price: 120000,
    color: 'Diamante',
    size: '1',
  };

  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotif = ctxAddItemNotification.state?.open;

  return (
    <div
      className={`${styles.root} ${
        showNotif === true ? styles.show : styles.hide
      }`}
    >
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Icon symbol={'check'}></Icon>
        </div>
        <span>Ítem agregado a tu Carrito</span>
      </div>

      <div className={styles.newItemContainer}>
        <div className={styles.imageContainer}>
          <img alt={sampleCartItem.alt} src={sampleCartItem.image} />
        </div>
        <div className={styles.detailContainer}>
          <span className={styles.name}>{sampleCartItem.name}</span>
          <span className={styles.meta}>Plan: {sampleCartItem.color}</span>
          <span className={styles.meta}>Horas: {sampleCartItem.size}</span>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <Button onClick={props.openCart} level={'secondary'}>
          ver mi carrito (5)
        </Button>
        <Button level="primary" href="/cart">
          finaliza tu compra
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>continúa comprando</Link>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;
