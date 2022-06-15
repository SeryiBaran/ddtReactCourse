import { FC } from 'react';
import styled from 'styled-components';

interface ICardElem {
  elem: any;
  elemContent: any;
}

const StyledCardElem = styled.div`
  margin-bottom: 0.3em;
  padding: 0.5em;
  border: solid 0.1em #cdcdcd;
  border-radius: 0.5em;
  p {
    display: flex;
    justify-content: space-between;
  }
`;

export const CardElem: FC<ICardElem> = ({ elem, elemContent }) => {
  return (
    <StyledCardElem>
      <p>
        <span>{elem}:</span> {elemContent}
      </p>
    </StyledCardElem>
  );
};
