import { Link, navigate } from 'gatsby';
import React from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const sampleCartItem = {
    image: '/products/pdp1.jpeg',
    alt: '',
    name: 'Lambswool Crew Neck Jumper',
    price: 220,
    color: 'Anthracite Melange',
    size: 'xs',
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Mis Ítems</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        <MiniCartItem {...sampleCartItem} />
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (COP)</span>
            <span>
              <CurrencyFormatter amount={220} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Los impuestos serán calculados al pagar.
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            Completar Pedido
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>Continúa Comprando</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
