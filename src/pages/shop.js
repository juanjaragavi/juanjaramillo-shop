import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';
import { Helmet } from 'react-helmet';
import Config from '../config.json';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const data = generateMockProductData(6, 'woman');

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
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
          content="Juan Jaramillo, inteligencia artificial, aprendizaje automático, ingeniero de prompts, proyectos de IA, desarrollador, marketing digital, experto en IA"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/media.juanjaramillo.tech/og-image.webp"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/shop" />
        <title>
          Tienda | Juan Jaramillo | Productos y Servicios de IA · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Inicio' },
                { link: '/', label: 'Servicios' },
                { label: 'Consultorías en IA (Remoto)' },
              ]}
            />
          </div>
        </Container>
        <Banner
          bgColor="transparent"
          maxWidth={'650px'}
          name={`Consultorías en Inteligencia Artificial`}
          subtitle={
            'Transforma tu negocio con nuestra asesoría en inteligencia artificial. Te ayudamos a diseñar e implementar soluciones de IA personalizadas, optimizando operaciones y estrategias para impulsar el crecimiento. Desbloquea el potencial de la IA y obtén una ventaja competitiva en el mercado. ¡Innova y crece con nosotros!'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>476 ítems</span>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filtros</span>
              </div>
            </div>
          </div>
          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>476 ítems</span>
            <ProductCardGrid data={data}></ProductCardGrid>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ShopPage;
