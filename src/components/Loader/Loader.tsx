import { spin } from '../../styles/animations';
import styled from 'styled-components';

export const Loader = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  margin-right: 1rem;
  padding: 0.5rem;
  border: 0.2rem solid #f3f3f3;
  border-top: 0.2rem solid #3498db;
  border-radius: 50%;
  background-color: transparent;
  animation: ${spin} 2s linear infinite;
`;