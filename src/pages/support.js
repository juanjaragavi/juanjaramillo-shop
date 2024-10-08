import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import * as styles from './support.module.css';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Gracias from '../components/Gracias';
import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Policy from '../components/Policy';
import Container from '../components/Container';
import Terms from '../components/Terms/Terms';

const SupportPage = (props) => {
  const subpages = [
    { title: 'Gracias', key: 'gracias' },
    { title: 'Contacto', key: 'contact' },
    { title: 'Términos y Condiciones', key: 'terms' },
    { title: 'Política de Privacidad', key: 'policy' },
  ];

  const [current, setCurrent] = useState(subpages[3]);

  const renderElement = (key) => {
    let tempElement = <React.Fragment />;

    switch (key) {
      case 'gracias':
        tempElement = <Gracias />;
        break;
      case 'contact':
        tempElement = <Contact />;
        break;
      case 'policy':
        tempElement = <Policy />;
        break;
      case 'terms':
        tempElement = <Terms />;
        break;
      default:
        break;
    }
    return tempElement;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.location.hash !== '' && props.location.hash !== undefined) {
      const hash = props.location.hash.substring(1);
      const tempCurrent = subpages.filter((detail) => detail.key === hash)[0];
      if (tempCurrent.key !== current.key) {
        setCurrent(tempCurrent);
        window.scrollTo(0, 475);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

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
          content="Juan Jaramillo, inteligencia artificial, aprendizaje automático, ingeniero de prompts, proyectos de IA, desarrollador, marketing digital, experto en IA"
        />
        <meta
          property="og:image"
          content="https://media.myparcero.com/og-image.webp"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/support" />
        <title>
          Soporte | Juan Jaramillo | Productos y Servicios de IA · Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={current.title}
          bgImage={'https://media.myparcero.com/fondo-header-contacto-tienda-online-de-juan-jaramillo.webp'}
          color={'var(--standard-white)'}
          height={'350px'}
        />

        <div className={styles.navContainer}>
          {subpages.map((details, index) => {
            return (
              <ThemeLink
                onClick={(e) => {
                  navigate(`/support#${details.key}`);
                }}
                key={details.key}
                isActive={current.key === details.key}
                to={`/support#${details.key}`}
              >
                {details.title}
              </ThemeLink>
            );
          })}
        </div>

        <div className={styles.pageContainer}>
          <Container size={'large'} spacing={'min'}>
            {subpages.map((details) => {
              return (
                <div
                  key={details.key}
                  className={`${styles.content} ${
                    current.key === details.key ? styles.show : styles.hide
                  }`}
                >
                  {renderElement(details.key)}
                </div>
              );
            })}
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
