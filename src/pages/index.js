import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/Layout';
import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <Layout disablePadding>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Boost your business with AI! Shop at Juan Jaramillo's premier AI services store for top-tier consulting, comprehensive courses, and innovative generative image solutions."
        />
        <meta
          name="keywords"
          content="Juan Jaramillo, inteligencia artificial, aprendizaje automático, ingeniero de prompts, proyectos de IA, desarrollador, marketing digital, experto en IA"
        />
        <meta
          property="og:image"
          content="https://media.myparcero.com/og-image.webp"
        />
        <link rel="canonical" href="http://shop.juanjaramillo.tech/" />
        <title>
        Tienda en Línea de Productos y Servicios de IA | Juan Jaramillo | Prompt Engineer · Developer · AI · Machine Learning Expert
        </title>
      </Helmet>
      <main className={styles.home}>
        <section className={styles.main}>
          <div className={styles.overlap}>
            <div className={styles.contenedorservicios}>
              <div className={styles.contenedorservicios2}>
                <div className={styles.packsdeservicios}>
                  <img
                    className={styles.brainillustration}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-4.svg"
                  />
                  <Link className={styles.textwrapper5} href="/shop">
                    Packs de Servicios (presencial)
                  </Link>
                </div>
                <div className={styles.packsdeservicios2}>
                  <img
                    className={styles.img}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-3.svg"
                  />
                  <Link className={styles.textwrapper6} href="/shop">
                    Packs de Servicios (remoto)
                  </Link>
                </div>
                <div className={styles.consultoriasenia}>
                  <img
                    className={styles.brainillustration2}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-2.svg"
                  />
                  <Link className={styles.textwrapper7} href="/shop">
                    Consultorías en IA (presencial)
                  </Link>
                </div>
                <div className={styles.consultoriasenia2}>
                  <img
                    className={styles.brainillustration3}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-1.svg"
                  />
                  <Link className={styles.textwrapper8} href="/shop">
                    Consultorías en IA (remoto)
                  </Link>
                </div>
                <div className={styles.contenedortitulo}>
                  <img
                    className={styles.line}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-3.svg"
                  />
                  <Link className={styles.textwrapper9} href="/shop">
                    SERVICIOS
                  </Link>
                  <img
                    className={styles.brainillustration4}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com.svg"
                  />
                </div>
              </div>
              <div className={styles.contenedorservicios3}>
                <div className={styles.promptsparacrear}>
                  <img
                    className={styles.starssvgrepocom}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-4.svg"
                  />
                  <Link className={styles.textwrapper10} href="/shop">
                    Prompts para crear imágenes
                  </Link>
                </div>
                <div className={styles.superprompts}>
                  <img
                    className={styles.starssvgrepocom2}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-3.svg"
                  />
                  <Link className={styles.textwrapper11} href="/shop">
                    Super Prompts
                  </Link>
                </div>
                <div className={styles.promptsdepago}>
                  <img
                    className={styles.starssvgrepocom3}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-2.svg"
                  />
                  <Link className={styles.textwrapper12} href="/shop">
                    De pago
                  </Link>
                </div>
                <div className={styles.promptsgratis}>
                  <img
                    className={styles.starssvgrepocom4}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-1.svg"
                  />
                  <Link className={styles.textwrapper13} href="/shop">
                    Gratis
                  </Link>
                </div>
                <div className={styles.contenedortitulo2}>
                  <div className={styles.overlapgroup}>
                    <Link className={styles.textwrapper14} href="/shop">
                      PROMPTS
                    </Link>
                    <img
                      className={styles.starssvgrepocom5}
                      alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                      src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com.svg"
                    />
                  </div>
                  <img
                    className={styles.line2}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-3.svg"
                  />
                </div>
              </div>
              <div className={styles.contenedorservicios4}>
                <div className={styles.capacitaciones}>
                  <img
                    className={styles.graduatesvgrepocom}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-4.svg"
                  />
                  <Link className={styles.textwrapper15} href="/shop">
                    Capacitaciones personalizadas
                  </Link>
                </div>
                <div className={styles.tutoriales}>
                  <img
                    className={styles.graduatesvgrepocom2}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-3.svg"
                  />
                  <Link className={styles.textwrapper16} href="/shop">
                    Tutoriales
                  </Link>
                </div>
                <div className={styles.cursosdepago}>
                  <img
                    className={styles.graduatesvgrepocom3}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-2.svg"
                  />
                  <Link className={styles.textwrapper11} href="/shop">
                    Cursos de pago
                  </Link>
                </div>
                <div className={styles.cursosgratuitos}>
                  <img
                    className={styles.graduatesvgrepocom4}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-1.svg"
                  />
                  <Link className={styles.textwrapper18} href="/shop">
                    Cursos gratuitos
                  </Link>
                </div>
                <div className={styles.contenedortitulo3}>
                  <Link className={styles.textwrapper19} href="/shop">
                    APRENDIZAJE
                  </Link>
                  <img
                    className={styles.graduatesvgrepocom5}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com.svg"
                  />
                  <img
                    className={styles.line3}
                    alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-1.svg"
                  />
                </div>
              </div>
              <div className={styles.overlapwrapper}>
                <div className={styles.overlap2}>
                  <div className={styles.herramientas}>
                    <img
                      className={styles.vector2}
                      alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                      src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/vector-2.svg"
                    />
                    <Link className={styles.textwrapper20} href="/shop">
                      Herramientas
                    </Link>
                  </div>
                  <div className={styles.generacionde}>
                    <img
                      className={styles.vector3}
                      alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                      src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/vector-1.svg"
                    />
                    <Link className={styles.textwrapper21} href="/shop">
                      Generación de imágenes
                    </Link>
                  </div>
                  <div className={styles.overlapgroupwrapper}>
                    <div className={styles.overlapgroup2}>
                      <Link className={styles.textwrapper22} href="/shop">
                        IMÁGENES
                      </Link>
                      <img
                        className={styles.imagesvgrepocom}
                        alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                        src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/image-01-svgrepo-com.svg"
                      />
                      <img
                        className={styles.line4}
                        alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                        src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contenedorchat}>
              <div className={styles.contenedorbarrade}>
                <img
                  className={styles.lupabuscadoria}
                  alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                  src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/lupa-buscador-ia.svg"
                />
                <div className={styles.barradebusqueda}>
                  <input
                    type="text"
                    className={styles.searchexample}
                    id="myInput"
                    placeholder="O busca lo que quieras en lenguaje natural..."
                  />
                </div>
                <input
                  className={styles.flechaenviar}
                  type="image"
                  src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/flecha-enviar.svg"
                  alt="Juan Jaramillo | Experto en IA · Prompt Engineer"
                  width="21"
                  height="24"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
