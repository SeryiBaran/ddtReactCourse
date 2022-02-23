import React from 'react';

import styles from './Card.module.css';

import CardElem from '../CardElem/CardElem';
import CardPhoto from '../CardPhoto/CardPhoto';
import CardMood from '../CardMood/CardMood';

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

function Card(props: CardProps) {

  return (
    <div className={styles.card} style={{fontSize: (props.size.toString() + "rem")}}>
      <div className={styles.card__content}>
        <CardPhoto photoUrl={props.photo} photoDescription={props.photoDescription} />
        <div className={styles.card__rows}>
          <CardElem elem="Имя" elemContent={props.name} />
          <CardElem elem="Фамилия" elemContent={props.lastname} />
          <CardElem elem="Пол" elemContent={props.gender} />
          <CardElem elem="Год рождения" elemContent={props.birth} />
          <CardElem elem="Диагноз" elemContent={props.diagnosis} />
          <CardMood />
        </div>
      </div>
    </div>
  );
}
export default Card;
