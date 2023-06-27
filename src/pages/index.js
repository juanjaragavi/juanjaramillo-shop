import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import * as styles from './index.module.css';
import { navigate } from 'gatsby';

const IndexPage = () => {
  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      <main className={styles.home}>
        <section className={styles.main}>
          <div className={styles.overlap}>
            <div className={styles.contenedorservicios}>
              <div className={styles.contenedorservicios2}>
                <div className={styles.packsdeservicios}>
                  <img
                    className={styles.brainillustration}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-4.svg"
                  />
                  <Link className={styles.textwrapper5} href="/">
                    Packs de Servicios (presencial)
                  </Link>
                </div>
                <div className={styles.packsdeservicios2}>
                  <img
                    className={styles.img}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-3.svg"
                  />
                  <Link className={styles.textwrapper6} href="/">
                    Packs de Servicios (remoto)
                  </Link>
                </div>
                <div className={styles.consultoriasenia}>
                  <img
                    className={styles.brainillustration2}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-2.svg"
                  />
                  <Link className={styles.textwrapper7} href="/">
                    Consultorías en IA (presencial)
                  </Link>
                </div>
                <div className={styles.consultoriasenia2}>
                  <img
                    className={styles.brainillustration3}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-1.svg"
                  />
                  <Link className={styles.textwrapper8} href="/">
                    Consultorías en IA (remoto)
                  </Link>
                </div>
                <div className={styles.contenedortitulo}>
                  <img
                    className={styles.line}
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-3.svg"
                  />
                  <Link className={styles.textwrapper9} href="/">
                    SERVICIOS
                  </Link>
                  <img
                    className={styles.brainillustration4}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com.svg"
                  />
                </div>
              </div>
              <div className={styles.contenedorservicios3}>
                <div className={styles.promptsparacrear}>
                  <img
                    className={styles.starssvgrepocom}
                    alt="Stars svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-4.svg"
                  />
                  <Link className={styles.textwrapper10} href="/">
                    Prompts para crear imágenes
                  </Link>
                </div>
                <div className={styles.superprompts}>
                  <img
                    className={styles.starssvgrepocom2}
                    alt="Stars svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-3.svg"
                  />
                  <Link className={styles.textwrapper11} href="/">
                    Super Prompts
                  </Link>
                </div>
                <div className={styles.promptsdepago}>
                  <img
                    className={styles.starssvgrepocom3}
                    alt="Stars svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-2.svg"
                  />
                  <Link className={styles.textwrapper12} href="/">
                    De pago
                  </Link>
                </div>
                <div className={styles.promptsgratis}>
                  <img
                    className={styles.starssvgrepocom4}
                    alt="Stars svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-1.svg"
                  />
                  <Link className={styles.textwrapper13} href="/">
                    Gratis
                  </Link>
                </div>
                <div className={styles.contenedortitulo2}>
                  <div className={styles.overlapgroup}>
                    <Link className={styles.textwrapper14} href="/">
                      PROMPTS
                    </Link>
                    <img
                      className={styles.starssvgrepocom5}
                      alt="Stars svgrepo com"
                      src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com.svg"
                    />
                  </div>
                  <img
                    className={styles.line2}
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-3.svg"
                  />
                </div>
              </div>
              <div className={styles.contenedorservicios4}>
                <div className={styles.capacitaciones}>
                  <img
                    className={styles.graduatesvgrepocom}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-4.svg"
                  />
                  <Link className={styles.textwrapper15} href="/">
                    Capacitaciones personalizadas
                  </Link>
                </div>
                <div className={styles.tutoriales}>
                  <img
                    className={styles.graduatesvgrepocom2}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-3.svg"
                  />
                  <Link className={styles.textwrapper16} href="/">
                    Tutoriales
                  </Link>
                </div>
                <div className={styles.cursosdepago}>
                  <img
                    className={styles.graduatesvgrepocom3}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-2.svg"
                  />
                  <Link className={styles.textwrapper11} href="/">
                    Cursos de pago
                  </Link>
                </div>
                <div className={styles.cursosgratuitos}>
                  <img
                    className={styles.graduatesvgrepocom4}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-1.svg"
                  />
                  <Link className={styles.textwrapper18} href="/">
                    Cursos gratuitos
                  </Link>
                </div>
                <div className={styles.contenedortitulo3}>
                  <Link className={styles.textwrapper19} href="/">
                    APRENDIZAJE
                  </Link>
                  <img
                    className={styles.graduatesvgrepocom5}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com.svg"
                  />
                  <img
                    className={styles.line3}
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-1.svg"
                  />
                </div>
              </div>
              <div className={styles.overlapwrapper}>
                <div className={styles.overlap2}>
                  <div className={styles.herramientas}>
                    <img
                      className={styles.vector2}
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/vector-2.svg"
                    />
                    <Link className={styles.textwrapper20} href="/">
                      Herramientas
                    </Link>
                  </div>
                  <div className={styles.generacionde}>
                    <img
                      className={styles.vector3}
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/vector-1.svg"
                    />
                    <Link className={styles.textwrapper21} href="/">
                      Generación de imágenes
                    </Link>
                  </div>
                  <div className={styles.overlapgroupwrapper}>
                    <div className={styles.overlapgroup2}>
                      <Link className={styles.textwrapper22} href="/">
                        IMÁGENES
                      </Link>
                      <img
                        className={styles.imagesvgrepocom}
                        alt="svgrepo com"
                        src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/image-01-svgrepo-com.svg"
                      />
                      <img
                        className={styles.line4}
                        alt="Line"
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
                  alt="Lupa buscador ia"
                  src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/lupa-buscador-ia.svg"
                />
                <div className={styles.barradebusqueda}>
                  <input
                    type="text"
                    className={styles.searchexample}
                    id="myInput"
                    placeholder="Busca lo que quieras en lenguaje natural..."
                  />
                </div>
                <input
                  className={styles.flechaenviar}
                  type="image"
                  src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/flecha-enviar.svg"
                  alt="Submit"
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
