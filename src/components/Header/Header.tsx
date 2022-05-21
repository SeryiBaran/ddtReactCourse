import styled from 'styled-components';
import { Link } from '@tanstack/react-location';

export const Header = styled.header`
  padding: 1.5rem;
  background-color: RGBA(240, 240, 240, 0.55);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  flex-wrap: wrap;
  gap: 1em;
  @media (min-width: 841px) {
    position: sticky;
    top: 0;
  }
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

export const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  user-select: none;
  background: rgb(212, 75, 56);
  padding: 0.7em 1.5em;
  outline: none;
`;
