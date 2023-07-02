import { Link } from 'gatsby';
import React from 'react';

import Brand from '../components/Brand';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Icon from '../components/Icons/Icon';
import OrderSummary from '../components/OrderSummary';

import * as styles from './cart.module.css';

const CartPage = (props) => {
  const sampleCartItem = {
    image: 'https://s3.amazonaws.com/juanjaramillo/assets/4-tienda-online-de-juan-jaramillo.webp',
    alt: '',
    name: 'Consultoría en Inteligencia Artificial (Servicio Remoto)',
    price: 120000,
    color: 'Silver',
    size: '2',
  };

  return (
    <div>
      <div className={styles.contentContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.headerContainer}>
            <div className={styles.shoppingContainer}>
              <Link className={styles.shopLink} to={'/shop'}>
                <Icon symbol={'arrow'}></Icon>
                <span className={styles.continueShopping}>
                  Continúa Comprando
                </span>
              </Link>
            </div>
            <Brand />
            <div className={styles.loginContainer}>
              <Link to={'/login'}>Inicia Sesión</Link>
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <h3>Mi Carrito de Compras</h3>
            <div className={styles.cartContainer}>
              <div className={styles.cartItemsContainer}>
                <CartItem {...sampleCartItem} />
                <CartItem {...sampleCartItem} />
              </div>
              <OrderSummary />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
