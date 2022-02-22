import React from 'react';

import CardElem from '../CardElem/CardElem';
import CardPhoto from '../CardPhoto/CardPhoto';
import CardMood from '../CardMood/CardMood';
import './Card.css';

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
    <div className="card" style={{fontSize: (size.toString() + "rem")}}>
      <div className="card__content">
        <CardPhoto photoUrl={photo} photoDescription={photoDescription} />
        <div className="card__rows">
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
