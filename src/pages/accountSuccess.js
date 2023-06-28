import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const AccountSuccessPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Tu Cuenta ha sido Creada</h1>
          <p>
          Te hemos enviado un enlace de confirmación para activar tu cuenta. Por favor, revisa tu correo electrónico y verifícalo.
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'TU CUENTA'}
              icon={'user'}
              subtitle={'Revisa la configuración de tu Cuenta.'}
              link={'/account/settings'}
            />

            <ActionCard
              title={'TIENDA'}
              icon={'bag'}
              subtitle={'Empieza a comprar servicios y productos de IA.'}
              link={'/shop'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AccountSuccessPage;
