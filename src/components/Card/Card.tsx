import React from 'react';

import CardElem from '../CardElem/CardElem';
import CardPhoto from '../CardPhoto/CardPhoto';
import CardMood from '../CardMood/CardMood';
import styles from './Card.module.css';

interface CardProps {
  name: string;
  lastname: string;
  birth: number|string;
  gender: string;
  diagnosis: string;
  photo: string;
  photoDescription: string;
  size: number;
}

function Card({
  name,
  lastname,
  birth,
  gender,
  diagnosis,
  photo,
  photoDescription,
  size
}: CardProps) {

  return (
    <div className={styles.card} style={{fontSize: (size.toString() + "rem")}}>
      {/*<div className="card__content">*/}
      <div className={styles.card__content}>
        <CardPhoto photoUrl={photo} photoDescription={photoDescription} />
        <div className={styles.card__rows}>
          <CardElem elem="Имя" elemContent={name} />
          <CardElem elem="Фамилия" elemContent={lastname} />
          <CardElem elem="Пол" elemContent={gender} />
          <CardElem elem="Год рождения" elemContent={birth} />
          <CardElem elem="Диагноз" elemContent={diagnosis} />
          <CardMood />
        </div>
      </div>
    </div>
  );
}
export default Card;
