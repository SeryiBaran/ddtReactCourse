import styled from 'styled-components';

const Header = styled.header`
  padding: 1.5rem;
  background-color: RGBA(240, 240, 240, 0.55);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  flex-wrap: wrap;
  gap: 1em;
  @media (min-width: 800px) {
    position: sticky;
    top: 0;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default Header;
