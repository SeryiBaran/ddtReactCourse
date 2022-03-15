import React from 'react';

import styles from './Button.module.css';

interface MyButtonProps {
  defaultIcon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  id?: string;
  className?: string;
}

const Button: React.FC<MyButtonProps> = ({
  defaultIcon,
  children,
  className,
  ...props
}) => {
  return (
    <button className={`${styles['button']} ${className}`} {...props}>
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
    </button>
  );
};

export default Button;
