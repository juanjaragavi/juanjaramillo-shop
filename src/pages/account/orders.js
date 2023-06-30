import React from 'react';
import * as styles from './orders.module.css';
import { Helmet } from 'react-helmet';
import AccountLayout from '../../components/AccountLayout/AccountLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import OrderItem from '../../components/OrderItem/OrderItem';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';

const OrderPage = (props) => {
  if (isAuth() === false) {
    navigate('/login');
  }

  const sampleOrder1 = {
    id: '2',
    orderPlaced: 'Jun 12, 2023',
    lastUpdate: 'Jun 23, 2023',
    status: 'pendiente',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '120000',
      },
      {
        image: '/products/shirt2.jpg',
        alt: 'order 1 product 2',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '1',
        price: '300000',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '200000',
      state: 'NSW',
      country: 'Australia',
    },
    billingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '200000',
      state: 'NSW',
      country: 'Australia',
    },
  };

  const sampleOrder2 = {
    id: '1',
    orderPlaced: 'May 11, 2023',
    lastUpdate: 'Jun 28, 2023',
    status: 'pendiente',
    items: [
      {
        image: '/products/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '100000',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '200000',
      state: 'NSW',
      country: 'Australia',
    },
    billingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '200000',
      state: 'NSW',
      country: 'Australia',
    },
  };

  return (
    <Layout>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="¡Impulsa tu negocio con IA! Compra en la tienda de servicios de IA de Juan Jaramillo para obtener consultoría de primer nivel, cursos integrales y soluciones innovadoras de generación de imágenes."
        />
        <meta
          name="keywords"
          content="Juan Jaramillo, artificial intelligence, machine learning, prompt engineer, AI projects, developer, digital marketing, AI expert"
        />
        <meta
          property="og:image"
          content="https://juanjaramillo.s3.amazonaws.com/assets/og-image.png"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/account/orders" />
        <title>
          Mi Cuenta | Juan Jaramillo | Productos de Inteligencia Artificial · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Tienda' },
            { link: '/account', label: 'Mi Cuenta' },
            { link: '/account/orders/', label: 'Mis Pedidos' },
          ]}
        />
        <h1>Mis Pedidos</h1>
        <div className={`${styles.tableHeaderContainer} ${styles.gridStyle}`}>
          <span className={styles.tableHeader}>Pedido #</span>
          <span className={styles.tableHeader}>Fecha de Compra</span>
          <span className={styles.tableHeader}>Última Aztualización</span>
          <span className={styles.tableHeader}>Estado</span>
        </div>

        <OrderItem order={sampleOrder1} headerStyling={styles.gridStyle} />
        <OrderItem order={sampleOrder2} headerStyling={styles.gridStyle} />
      </AccountLayout>
    </Layout>
  );
};

export default OrderPage;
