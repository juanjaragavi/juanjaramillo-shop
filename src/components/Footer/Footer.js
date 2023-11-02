import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className={styles.footerLinkContainer} key={indexLink}>
                  {/* for web version */}
                  <div className={styles.footerLinks}>
                    <span className={styles.linkTitle}>
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className={styles.mobileFooterLinks}>
                    <Accordion
                      customStyle={styles}
                      type={'add'}
                      title={linkCollection.subTitle}
                    >
                      {renderLinks(linkCollection)}
                    </Accordion>
                  </div>
                </div>
              );
            })}
            <div className={styles.newsLetter}>
              <div className={styles.newsLetterContent}>
                <span className={styles.linkTitle}>
                  Boletín de Noticias de IA
                </span>
                <p className={styles.promoMessage}>
                  ¡Consigue un 15% de descuento en tu primera compra! Además, sé
                  el primero en enterarte sobre rebajas, lanzamientos de nuevos
                  productos y ofertas exclusivas.
                </p>

                <form
                  className={styles.newsLetterForm}
                  id="sib-form"
                  method="POST"
                  action="https://453c3c1b.sibforms.com/serve/MUIFAJdLAuVBFobSY76iLbHmNoTPEJaLAzibqT3H-5NBojIYbW399sxWhPYphHtKjcSTRAKjfLZxfz1SAYcluGSvESK9TYfBZf4LE_WpE8Xvj2kjD66xe8Fixvvue5iWyD2szV5IvCQ_YxtlHi9iLrmuoHQpEaSnboe2qFvaXBoAlbLJuTuK5s0P9rMfYrBZTuiAkzvbIiGAJR8Z"
                >
                  <FormInputField
                    icon={'arrow'}
                    id={'EMAIL'}
                    placeholder={'Ingresa tu Correo Electrónico'}
                    handleChange={(_, e) => setEmail(e)}
                  />
                </form>
                <div className={styles.socialContainer}>
                  {Config.social.youtube && (
                    <div
                      onClick={() => handleSocialClick('youtube')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'youtube'}></Icon>
                    </div>
                  )}

                  {Config.social.instagram && (
                    <div
                      onClick={() => handleSocialClick('instagram')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'instagram'}></Icon>
                    </div>
                  )}

                  {Config.social.facebook && (
                    <div
                      onClick={() => handleSocialClick('facebook')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'facebook'}></Icon>
                    </div>
                  )}

                  {Config.social.twitter && (
                    <div
                      onClick={() => handleSocialClick('twitter')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'twitter'}></Icon>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            <div className={styles.settings}>
              <Dropdown
                label={'País/Región'}
                optionList={Config.currencyList}
              />
              <Dropdown label={'Idioma'} optionList={Config.languageList} />
            </div>
            <div className={styles.copyrightContainer}>
              <div className={styles.creditCardContainer}>
                {Config.paymentOptions.amex && (
                  <img
                    className={styles.amexSize}
                    src={'https://static.files.juanjaramillo.tech/jjcontainer/amex.webp'}
                    alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                  ></img>
                )}
                {Config.paymentOptions.mastercard && (
                  <img
                    className={styles.masterSize}
                    src={'https://static.files.juanjaramillo.tech/jjcontainer/master.webp'}
                    alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                  ></img>
                )}
                {Config.paymentOptions.visa && (
                  <img
                    className={styles.visaSize}
                    src={'https://static.files.juanjaramillo.tech/jjcontainer/visa.webp'}
                    alt={'Juan Jaramillo | Experto en IA · Prompt Engineer'}
                  ></img>
                )}
              </div>
              <span>
                &copy; {new Date().getFullYear()}. Diseño y desarrollo por{' '}
                <Button target={true} href="https://juanjaramillo.tech/">
                  Juan Jaramillo
                </Button>{' '}
                Powered by{' '}
                <Button target={true} href="https://www.gatsbyjs.com/">
                  GatsbyJS
                </Button>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
