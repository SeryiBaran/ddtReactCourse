import { FC } from 'react';
import styled from 'styled-components';

interface ICardPhoto {
  photoUrl: string;
  photoDescription: any;
}

const StyledCardPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 10em;
  border-radius: 0.5em;
`;

const Photo = styled.img`
  max-width: 100%;
  margin-bottom: 0.5em;
  border: solid 0.1em #cdcdcd;
  border-radius: inherit;
`;

const Description = styled.p`
  font-size: 0.8em;
  opacity: 0.5;
`;

const DescriptionContent = styled.span`
  margin-left: 0.3em;
`;

export const CardPhoto: FC<ICardPhoto> = ({ photoUrl, photoDescription }) => {
  return (
    <StyledCardPhoto>
      <Photo src={photoUrl} alt="Photo" />
      <Description>
        <i className="fas fa-arrow-up"></i>
        <DescriptionContent>{photoDescription}</DescriptionContent>
      </Description>
    </StyledCardPhoto>
  );
};
