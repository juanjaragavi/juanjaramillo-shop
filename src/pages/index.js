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
                  <div className={styles.textwrapper5}>
                    Packs de Servicios (presencial)
                  </div>
                </div>
                <div className={styles.packsdeservicios2}>
                  <img
                    className={styles.img}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-3.svg"
                  />
                  <div className={styles.textwrapper6}>
                    Packs de Servicios (remoto)
                  </div>
                </div>
                <div className={styles.consultoriasenia}>
                  <img
                    className={styles.brainillustration2}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-2.svg"
                  />
                  <div className={styles.textwrapper7}>
                    Consultorías en IA (presencial)
                  </div>
                </div>
                <div className={styles.consultoriasenia2}>
                  <img
                    className={styles.brainillustration3}
                    alt="Brain illustration"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/brain-illustration-1-svgrepo-com-1.svg"
                  />
                  <div className={styles.textwrapper8}>
                    Consultorías en IA (remoto)
                  </div>
                </div>
                <div className={styles.contenedortitulo}>
                  <img
                    className={styles.line}
                    alt="Line"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/line-1-3.svg"
                  />
                  <div className={styles.textwrapper9}>SERVICIOS</div>
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
                  <div className={styles.textwrapper10}>
                    Prompts para crear imágenes
                  </div>
                </div>
                <div className={styles.superprompts}>
                  <img
                    className={styles.starssvgrepocom2}
                    alt="Stars svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-3.svg"
                  />
                  <div className={styles.textwrapper11}>Super Prompts</div>
                </div>
                <div className={styles.promptsdepago}>
                  <img
                    className={styles.starssvgrepocom3}
                    alt="Stars svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-2.svg"
                  />
                  <div className={styles.textwrapper12}>De pago</div>
                </div>
                <div className={styles.promptsgratis}>
                  <img
                    className={styles.starssvgrepocom4}
                    alt="Stars svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/stars-svgrepo-com-1.svg"
                  />
                  <div className={styles.textwrapper13}>Gratis</div>
                </div>
                <div className={styles.contenedortitulo2}>
                  <div className={styles.overlapgroup}>
                    <div className={styles.textwrapper14}>PROMPTS</div>
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
                  <div className={styles.textwrapper15}>
                    Capacitaciones personalizadas
                  </div>
                </div>
                <div className={styles.tutoriales}>
                  <img
                    className={styles.graduatesvgrepocom2}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-3.svg"
                  />
                  <div className={styles.textwrapper16}>Tutoriales</div>
                </div>
                <div className={styles.cursosdepago}>
                  <img
                    className={styles.graduatesvgrepocom3}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-2.svg"
                  />
                  <div className={styles.textwrapper17}>Cursos de pago</div>
                </div>
                <div className={styles.cursosgratuitos}>
                  <img
                    className={styles.graduatesvgrepocom4}
                    alt="Graduate svgrepo com"
                    src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/graduate-svgrepo-com-1.svg"
                  />
                  <div className={styles.textwrapper18}>Cursos gratuitos</div>
                </div>
                <div className={styles.contenedortitulo3}>
                  <div className={styles.textwrapper19}>APRENDIZAJE</div>
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
                    <div className={styles.textwrapper20}>Herramientas</div>
                  </div>
                  <div className={styles.generacionde}>
                    <img
                      className={styles.vector3}
                      alt="Vector"
                      src="https://generation-sessions.s3.amazonaws.com/7239e843ae9846c8aa9398eec9cc5734/img/vector-1.svg"
                    />
                    <div className={styles.textwrapper21}>
                      Generación de imágenes
                    </div>
                  </div>
                  <div className={styles.overlapgroupwrapper}>
                    <div className={styles.overlapgroup2}>
                      <div className={styles.textwrapper22}>IMÁGENES</div>
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
