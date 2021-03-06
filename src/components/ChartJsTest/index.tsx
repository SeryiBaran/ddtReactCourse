import { FC, useState, useEffect } from 'react';
import axios from 'axios';

import { PieCountries } from '@/components/PieCountries';

const fetchUrl = 'https://disease.sh/v3/covid-19/countries?sort=cases';

export const ChartJsTest: FC = () => {
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
