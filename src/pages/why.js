import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './why.module.css';

const WhyPage = (props) => {
  let introduccionRef = useRef();
  let automatizacionRef = useRef();
  let decisionesRef = useRef();
  let ahorraRef = useRef();
  let experienciaRef = useRef();
  let analisisRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
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
          content="Juan Jaramillo, inteligencia artificial, aprendizaje automático, ingeniero de prompts, proyectos de IA, desarrollador, marketing digital, experto en IA"
        />
        <meta
          property="og:image"
          content="https://media.myparcero.com/og-image.webp"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/login" />
        <title>
          Nosotros | Juan Jaramillo | Productos y Servicios de IA · Prompt
          Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={
            'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-7.webp'
          }
          title={`¿por qué contratar\na un experto en IA?`}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => handleScroll(introduccionRef)}
            to={'#introduccion'}
          >
            Introducción
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(automatizacionRef)}
            to={'#automatizacion'}
          >
            Automatización
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(decisionesRef)}
            to={'#decisiones'}
          >
            Toma de Decisiones
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(ahorraRef)} to={'#ahorra'}>
            Ahorra Dinero
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(experienciaRef)}
            to={'#experiencia'}
          >
            Experiencia Externa
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(analisisRef)} to={'#analisis'}>
            Análisis de Datos
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={introduccionRef}>
            <p>
              Descubre el poder de la inteligencia artificial para automatizar
              tareas, tomar decisiones inteligentes y ahorrar dinero.
            </p>
            <br />
            <br />
            <p>
              Optimiza tu negocio con análisis de datos avanzados y obtén una
              perspectiva externa que te llevará al siguiente nivel. No dejes
              pasar esta oportunidad de transformación.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img
            alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
            src={
              'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-6.webp'
            }
          ></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Automatización de tareas</h3>
            <div ref={automatizacionRef}>
              <p>
                Ahorra tiempo y maximiza tu eficiencia. Con la IA, puedes
                automatizar tareas rutinarias como la entrada de datos,
                generación de informes y programación. Libérate de las tareas
                tediosas y enfócate en resolver problemas y tomar decisiones
                estratégicas.
              </p>
              <img
                alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                src={
                  'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-9.webp'
                }
              ></img>
            </div>
            <h3>Toma decisiones inteligentes</h3>
            <div id={'#decisiones'} ref={decisionesRef}>
              <p>
                No dejes nada al azar. La IA te brinda información precisa y
                oportuna para tomar decisiones más acertadas. Con algoritmos
                predictivos, descubrirás patrones ocultos en grandes conjuntos
                de datos, obteniendo ideas valiosas que marcarán la diferencia
                en tu negocio.
              </p>
              <img
                alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                src={
                  'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-10.webp'
                }
              ></img>
            </div>
            <h3>Ahorra dinero y mejora la calidad</h3>
            <div ref={ahorraRef}>
              <p>
                Optimiza tus recursos. La IA reduce costos al automatizar tareas
                repetitivas, eliminar errores y mejorar la eficiencia en tu
                flujo de trabajo. Obtén resultados de calidad sin gastar de más.
              </p>
              <img
                alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                src={
                  'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-11.webp'
                }
              ></img>
            </div>
            <h3>Experiencia externa</h3>
            <div id={'#experiencia'} ref={experienciaRef}>
              <p>
                Obtén una nueva perspectiva. Contratar a un experto en IA te
                brinda una visión fresca sobre tu negocio, identificando
                oportunidades para implementar la IA y obtener beneficios
                significativos. Aprovecha el conocimiento especializado y lleva
                tu empresa al siguiente nivel.
              </p>
              <img
                alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                src={
                  'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-8.webp'
                }
              ></img>
            </div>
            <h3>Análisis de datos avanzado</h3>
            <div ref={analisisRef}>
              <p>
                Descubre información valiosa. La IA procesa grandes volúmenes de
                datos de forma rápida y precisa, brindándote insights que serían
                difíciles de obtener manualmente. Toma decisiones informadas y
                ofrece recomendaciones sólidas a tus clientes.
              </p>
              <img
                alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                src={
                  'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-12.webp'
                }
              ></img>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img
            alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
            src={
              'https://media.myparcero.com/servicios-de-consultoria-tienda-juan-jaramillo-5.webp'
            }
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default WhyPage;
