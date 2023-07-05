import React from 'react';

import Swatch from '../Swatch';
import * as styles from './SwatchList.module.css';

const SwatchList = (props) => {
  const { swatchList, activeSwatch, setActiveSwatch } = props;
  return (
    <div className={styles.root}>
      <span className={styles.label}><span className={styles.jjpink}>1.</span> Selecciona un Plan de Consultoría:<br/><br/><span className={styles.description}>{activeSwatch.title}</span><br/><span>{activeSwatch.description}</span></span>
      <div className={styles.swatchSelection}>
        {swatchList?.map((colorChoice, index) => {
          return (
            <Swatch
              key={index}
              data={colorChoice}
              setActiveSwatch={setActiveSwatch}
              isActive={activeSwatch === colorChoice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SwatchList;
