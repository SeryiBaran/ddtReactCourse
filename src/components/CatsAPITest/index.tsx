import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button } from '../Button';
import { Loader } from '../Loader';

const Img = styled.img`
  max-width: 30rem;
  width: 100%;
  height: 20rem;
  object-fit: contain;
  background-color: #91a7ff;
`;

interface ICat {
  url: string;
}

export const CatsAPITest: React.FC = () => {
  const [cat, setCat] = useState<ICat>({
    url: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchUrl: string = 'https://api.thecatapi.com/v1/images/search';

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
        {...(!isLoading && { defaultIcon: true })}
      >
        {isLoading ? <Loader /> : ''}
        {isLoading ? 'Загрузка...' : 'Другой кот'}
      </Button>
      <Img src={cat.url} alt="Кот" />
    </div>
  );
};
