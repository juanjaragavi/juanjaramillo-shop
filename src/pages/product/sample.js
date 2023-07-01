import React, { useState, useContext } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

import { generateMockProductData } from '../../helpers/mock';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const sampleProduct = generateMockProductData(1, 'sample')[0];
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct.colorOptions[0]
  );
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);
  const suggestions = generateMockProductData(4, 'woman');

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Inicio' },
              { label: 'Servicios', link: '/shop' },
              { label: 'Consultorías en IA (Remoto)', link: '/shop' },
              { label: `${sampleProduct.name}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={sampleProduct.gallery} />
            </div>
            <div className={styles.details}>
              <h1>{sampleProduct.name}</h1>
              <span className={styles.vendor}> por {sampleProduct.vendor}</span>

              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
              </div>

              <div>
                <SwatchList
                  swatchList={sampleProduct.colorOptions}
                  activeSwatch={activeSwatch}
                  setActiveSwatch={setActiveSwatch}
                />
              </div>

              <div className={styles.sizeContainer}>
                <SizeList
                  sizeList={sampleProduct.sizeOptions}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.sizeLabelContainer}>
                  <span className={styles.label}>
                    <span className={styles.jjpink}>3.</span> Agrega el Servicio
                    seleccionado a tu Carrito. Una vez finalices tu compra,
                    recibirás un correo electrónico de confirmación.
                  </span>
                </div>
                <div className={styles.priceContainer}>
                  <span><CurrencyFormatter appendZero amount={sampleProduct.price} /> / Hora</span>
                </div>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => showNotification()}
                    fullWidth
                    level={'primary'}
                  >
                    Agrégalo a tu Carrito
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol={'heart'}></Icon>
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol={'heartFill'}></Icon>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <span>SKU: {sampleProduct.productCode}</span>
              </div>

              <div className={styles.informationContainer}>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'composition & care'}
                >
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'delivery & returns'}
                >
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
                <Accordion type={'plus'} customStyle={styles} title={'help'}>
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
          <div className={styles.suggestionContainer}>
            <h2>No te lo pierdas:</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div>
        </Container>

        <div className={styles.attributeContainer}>
          <Split
            image={'https://s3.amazonaws.com/juanjaramillo/assets/7-tienda-online-de-juan-jaramillo.webp'}
            alt={'attribute description'}
            title={'¿Por qué contratar un Experto en IA?'}
            description={
              'We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections.'
            }
            ctaText={'Conoce más'}
            cta={() => navigate('/blog')}
            bgColor={'transparent'}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
