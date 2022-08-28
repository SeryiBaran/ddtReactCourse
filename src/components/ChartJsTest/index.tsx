import { useState, useEffect } from 'react';
import axios from 'axios';

import { PieCountries } from '@/components';

const fetchUrl = 'https://disease.sh/v3/covid-19/countries?sort=cases';

export const ChartJsTest = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    axios
      .get(fetchUrl || '')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Статистика заражений Covid-19 по странам</h1>
      {!!data && <PieCountries data={data} />}
    </>
  );
};
