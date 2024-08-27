import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './favorites.module.css';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal';

import { isAuth } from '../../helpers/general';

const FavoritesPage = (props) => {
  const sampleFavorite1 = {
    color: 'Bronce',
    size: '2',
    img: 'https://media.myparcero.com/1-tienda-online-de-juan-jaramillo.webp',
    alt: 'Juan Jaramillo | Experto en IA · Prompt Engineer',
  };

  const sampleFavorite2 = {
    color: 'Plata',
    size: '1',
    img: 'https://media.myparcero.com/2-tienda-online-de-juan-jaramillo.webp',
    alt: 'Juan Jaramillo | Experto en IA · Prompt Engineer',
  };

  const sampleFavorite3 = {
    color: 'Oro',
    size: '1',
    img: 'https://media.myparcero.com/3-tienda-online-de-juan-jaramillo.webp',
    alt: 'Juan Jaramillo | Experto en IA · Prompt Engineer',
  };
  const sampleFavorite4 = {
    color: 'Bronce',
    size: '1',
    img: 'https://media.myparcero.com/4-tienda-online-de-juan-jaramillo.webp',
    alt: 'Juan Jaramillo | Experto en IA · Prompt Engineer',
  };

  if (isAuth() === false) {
    navigate('/login');
  }

  const [showDelete, setShowDelete] = useState(false);

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
          content="https://media.myparcero.com/og-image.webp"
        />
        <link
          rel="canonical"
          href="http://shop.juanjaramillo.tech/account/favorites"
        />
        <title>
          Mis Favoritos | Juan Jaramillo | Productos y Servicios de IA · Prompt
          Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <div className={styles.root}>
        <Container size={'large'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Tienda' },
              { link: '/account/favorites', label: 'Favoritos' },
            ]}
          />
          <h1>Mis Favoritos</h1>
          <div className={styles.favoriteListContainer}>
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite1}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite2}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite3}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite4}
            />
          </div>
        </Container>
      </div>
      <Modal visible={showDelete} close={() => setShowDelete(false)}>
        <div className={styles.confirmDeleteContainer}>
          <h4>¿Borrar este ítem de los Favoritos?</h4>
          <p>
            ¿Estás seguro de que quieres eliminar esto de tus favoritos? No
            podrás deshacer esta acción una vez que presiones{' '}
            <strong>'Borrar'</strong>
          </p>
          <div className={styles.actionContainer}>
            <Button onClick={() => setShowDelete(false)} level={'primary'}>
              Borrar
            </Button>
            <Button onClick={() => setShowDelete(false)} level={'secondary'}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default FavoritesPage;
