import React from 'react';
import styled from 'styled-components';

interface CardElemProps {
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

export const CardElem: React.FC<CardElemProps> = props => {
  return (
    <StyledCardElem>
      <p>
        <span>{props.elem}:</span> {props.elemContent}
      </p>
    </StyledCardElem>
  );
};
