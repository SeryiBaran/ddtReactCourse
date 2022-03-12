import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './CatsAPITest.module.css';

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
    fetchData();
  }, []);

  return (
    <div id="cats-api-test">
      <button
        className={styles['cats-api-test-fetch-button']}
        onClick={() => {
          fetchData();
        }}
      >
        {isLoading ? (
          <div className={styles['loader']}></div>
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
      </button>
      <img className={styles['cats-api-test-img']} src={cat.url} alt="Кот" />
    </div>
  );
};

export default CatsAPITest;
