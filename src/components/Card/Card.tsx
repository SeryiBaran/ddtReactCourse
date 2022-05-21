import React from 'react';
import styled from 'styled-components';

import {CardElem} from '../CardElem/CardElem';
import {CardPhoto} from '../CardPhoto/CardPhoto';
import {CardMood} from '../CardMood/CardMood';

interface CardProps {
  name: string;
  lastname: string;
  birth: number | string;
  gender: string;
  diagnosis: string;
  photo: string;
  photoDescription: string;
  size: number;
}

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 30em;
  padding: 1.5em;
  gap: 1.5em;
  border-radius: 0.2em;
  background-color: #ededed;
  box-shadow: 0 0 0.6em 0.3em rgb(0 0 0 / 20%);
`;

const CardRows = styled.div`
  flex: 1 1 auto;
`;

export const Card: React.FC<CardProps> = props => {
  return (
    <CardDiv style={{ fontSize: props.size.toString() + 'rem' }}>
      <CardContent>
        <CardPhoto
          photoUrl={props.photo}
          photoDescription={props.photoDescription}
        />
        <CardRows>
          <CardElem elem="Имя" elemContent={props.name} />
          <CardElem elem="Фамилия" elemContent={props.lastname} />
          <CardElem elem="Пол" elemContent={props.gender} />
          <CardElem elem="Год рождения" elemContent={props.birth} />
          <CardElem elem="Диагноз" elemContent={props.diagnosis} />
          <CardMood />
        </CardRows>
      </CardContent>
    </CardDiv>
  );
};
