import React from 'react';
import * as styles from './accountSuccess.module.css';
import { Helmet } from 'react-helmet';
import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Boost your business with AI! Shop at Juan Jaramillo's premier AI services store for top-tier consulting, comprehensive courses, and innovative generative image solutions."
        />
        <meta
          name="keywords"
          content="Juan Jaramillo, artificial intelligence, machine learning, prompt engineer, AI projects, developer, digital marketing, AI expert"
        />
        <meta
          property="og:image"
          content="https://static.files.juanjaramillo.tech/og-image.webp"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/orderConfirm" />
        <title>
          ¡Gracias! | Juan Jaramillo | Productos y Servicios de IA · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>¡Muchas Gracias por tu Compra!</h1>
          <p>
          Ahora estamos procesando tu pedido. Si tienes alguna inquietud, no dudes en enviarnos un correo electrónico a <a href='mailto:info@juanjaramillo.tech' target="_blank">info@juanjaramillo.tech</a>
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Status del Pedido'}
              icon={'delivery'}
              subtitle={'Revisa el estado de tu Pedido aquí.'}
              link={'/account/orders'}
              size={'lg'}
            />

            <ActionCard
              title={'Comprar'}
              icon={'bag'}
              subtitle={'Continúa tus Compras en la tienda.'}
              link={'/shop'}
            />

            <ActionCard
              title={'FAQs'}
              icon={'question'}
              subtitle={'¿Dudas? Revisa nuestras FAQ.s'}
              link={'/faq'}
            />

            <ActionCard
              title={'Contacto'}
              icon={'phone'}
              subtitle={'Escríbenos y obtén respuesta en segundos.'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
