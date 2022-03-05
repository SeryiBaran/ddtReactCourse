import React from 'react';

import styles from './CardElem.module.css';

interface CardElemProps {
  elem: any;
  elemContent: any;
}

function CardElem(props: CardElemProps) {
  return (
    <div className={styles['card-elem']}>
      <p>
        <span>{props.elem}:</span> {props.elemContent}
      </p>
    </div>
  );
}

export default CardElem;
