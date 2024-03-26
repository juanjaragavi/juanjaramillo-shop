import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './404.module.css';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import Container from '../components/Container';
import FormInputField from '../components/FormInputField/FormInputField';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <Layout disablePaddingBottom>
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
          content="https://storage.googleapis.com/media.juanjaramillo.tech/og-image.webp"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/404" />
        <title>
          Página no Encontrada | Juan Jaramillo | Productos y Servicios de IA · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>404</h1>
          <h2>Ya sabes que significa esto, ¿no? 🤷🏻‍♂️</h2>
          <p>
            Pero no te preocupes, aquí abajo puedes buscar lo que necesitas.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.searchContainer}>
              <FormInputField
                id={'name'}
                value={search}
                handleChange={(_, e) => setSearch(e)}
                type={'text'}
              />
              <Button type={'submit'} level={'primary'}>
                buscar
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
