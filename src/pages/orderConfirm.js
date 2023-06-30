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
          content="https://juanjaramillo.s3.amazonaws.com/assets/og-image.png"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/orderConfirm" />
        <title>
          ¡Gracias! | Juan Jaramillo | Productos y Servicios de IA · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Thank You!</h1>
          <p>
            We are now processing your order. If you have any concerns feel free
            to email us at customerservice@example.com
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Order Status'}
              icon={'delivery'}
              subtitle={'Check your order status'}
              link={'/account/orders'}
              size={'lg'}
            />

            <ActionCard
              title={'Shop'}
              icon={'bag'}
              subtitle={'Continue Shopping'}
              link={'/shop'}
            />

            <ActionCard
              title={'FAQs'}
              icon={'question'}
              subtitle={'Check out FAQs page'}
              link={'/faq'}
            />

            <ActionCard
              title={'Contact Us'}
              icon={'phone'}
              subtitle={'Reach out to us'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
