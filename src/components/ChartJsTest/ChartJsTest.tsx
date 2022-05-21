import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {PieCountries} from '../PieCountries/PieCountries';

export const ChartJsTest: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [response] = await Promise.all([
          axios.get('https://disease.sh/v3/covid-19/countries?sort=cases'),
        ]);

        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Статистика заражений Covid-19 по странам</h1>
      <PieCountries data={data} />
    </div>
  );
};
