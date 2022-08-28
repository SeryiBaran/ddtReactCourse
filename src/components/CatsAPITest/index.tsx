import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Button } from '@/components/Button';
import { Loader } from '@/components/Loader';

const fetchUrl = 'https://api.thecatapi.com/v1/images/search';

const Img = styled.img`
  max-width: 30rem;
  width: 100%;
  height: 20rem;
  object-fit: contain;
  background-color: #91a7ff;
`;

export const CatsAPITest = () => {
  const [cat, setCat] = useState({
    url: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    axios
      .get(fetchUrl || '')
      .then(response => {
        setCat(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
      {!!cat && <Img src={cat?.url} alt="Кот" />}
    </div>
  );
};
