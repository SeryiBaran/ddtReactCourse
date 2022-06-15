import { FC } from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  defaultIcon?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

interface IButtonStyled {
  defaultIcon?: boolean;
  children: React.ReactNode;
}

const ButtonStyled = styled.button.attrs(
  (props: IButtonStyled) => ({}),
)<IButtonStyled>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 30rem;
  margin: 3rem 0;
  padding: 2rem;
  border-radius: 50rem;
  background-color: #3b5bdb;
  box-shadow: 0 0.8rem 0 0 rgb(31 53 157 / 100%);
  color: #edf2ff;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  transition-property: box-shadow, background, transform, color;
  svg {
    min-width: 3rem;
    min-height: 3rem;
    margin-right: 1rem;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #4c6ef5;
    transition: all 0.1s ease-in-out;
    transition-property: fill, background;
  }

  ${props =>
    !props.disabled
      ? css`
          :active {
            transform: translateY(0.4rem);
            box-shadow: 0 0.4rem 0 0 rgb(31 53 157 / 100%);
          }
          :hover {
            background-color: #364fc7;
            color: #dbe4ff;
            svg {
              fill: #dbe4ff;
              background-color: #3b5bdb;
            }
          }
        `
      : css`
          cursor: not-allowed;
          filter: grayscale(90%);
          opacity: 0.8;
        `}
`;

export const Button: FC<IButton> = ({ defaultIcon, children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {defaultIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
          />
          <path
            fillRule="evenodd"
            d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      )}
      {children}
    </ButtonStyled>
  );
};
