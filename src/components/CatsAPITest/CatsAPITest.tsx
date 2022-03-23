import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

import Button from '../Button/Button';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  min-width: 3rem;
  min-height: 3rem;
  margin-right: 1rem;
  padding: 0.5rem;
  border: 0.2rem solid #f3f3f3;
  border-top: 0.2rem solid #3498db;
  border-radius: 50%;
  background-color: #4c6ef5;
  animation: ${spin} 2s linear infinite;
`;

const Img = styled.img`
  width: 30rem;
  height: 20rem;
  object-fit: contain;
  background-color: #91a7ff;
`;

const CatsAPITest: React.FC = () => {
  const [cat, setCat] = useState({
    url: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchUrl = 'https://api.thecatapi.com/v1/images/search';

  async function fetchData() {
    setIsLoading(true);
    axios
      .get(fetchUrl)
      .then(response =>
        setCat(() => {
          setIsLoading(false);
          return response.data[0];
        }),
      )
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          fetchData();
        }}
        styles={':hover .loader {background-color: #3b5bdb;}'}
      >
        {isLoading ? (
          <Loader className="loader" />
        ) : (
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
        {isLoading ? 'Загрузка...' : 'Другой кот'}
      </Button>
      <Img src={cat.url} alt="Кот" />
    </div>
  );
};

export default CatsAPITest;
