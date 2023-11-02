import React from 'react';
import { parse } from 'query-string';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../components/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import ProductCardGrid from '../components/ProductCardGrid';

import { generateMockProductData } from '../helpers/mock';

import * as styles from './search.module.css';

const SearchPage = (props) => {
  const params = parse(props.location.search);
  const searchQuery = params.q ? params.q : '';

  const sampleData = generateMockProductData(3, 'woman');

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
          content="https://static.files.juanjaramillo.tech/og-image.webp"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/search" />
        <title>
          Resultados de Búsqueda | Juan Jaramillo | Productos y Servicios de IA · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { label: `Search results for '${searchQuery}'` },
            ]}
          />
          <div className={styles.searchLabels}>
            <h4>Search results for '{searchQuery}'</h4>
            <span>3 results</span>
          </div>
          <ProductCardGrid
            showSlider={false}
            height={580}
            columns={3}
            data={sampleData}
          />
        </Container>
      </div>
    </Layout>
  );
};

export default SearchPage;
