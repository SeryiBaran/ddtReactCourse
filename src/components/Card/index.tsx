import React from 'react';
import styled from 'styled-components';

import { CardElem } from '../CardElem';
import { CardPhoto } from '../CardPhoto';
import { CardMood } from '../CardMood';

interface ICard {
  name: string;
  lastname?: string;
  birth?: string;
  gender?: string;
  diagnosis: string;
  photo: string;
  photoDescription: string;
  size?: number;
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

export const Card: React.FC<ICard> = ({
  name,
  lastname,
  birth,
  gender,
  diagnosis,
  photo,
  photoDescription,
  size,
}) => {
  return (
    <CardDiv style={{ fontSize: (size || 1).toString() + 'rem' }}>
      <CardContent>
        <CardPhoto photoUrl={photo} photoDescription={photoDescription} />
        <CardRows>
          <CardElem elem="Имя" elemContent={name} />
          <CardElem elem="Фамилия" elemContent={lastname || '-'} />
          <CardElem elem="Пол" elemContent={gender || '-'} />
          <CardElem elem="Год рождения" elemContent={birth || '-'} />
          <CardElem elem="Диагноз" elemContent={diagnosis} />
          <CardMood />
        </CardRows>
      </CardContent>
    </CardDiv>
  );
};
