import React from 'react';

import styles from './CardElem.module.css';

interface CardElemProps {
  elem: any;
  elemContent: any;
}

const CardElem: React.FC<CardElemProps> = props => {
  return (
    <div className={styles['card-elem']}>
      <p>
        <span>{props.elem}:</span> {props.elemContent}
      </p>
    </div>
  );
};

export default CardElem;
