import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import styles from './PieCountries.module.css';

interface PieCountriesProps {
  data: any;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCountries: React.FC<PieCountriesProps> = ({ data }) => {
  const chartJsDataBGColors = [
    '#D180139E',
    '#6EAC3B9E',
    '#17BA289E',
    '#520BCD9E',
    '#BF5C679E',
    '#D8BC099E',
    '#9458CA9E',
    '#897FAA9E',
    '#446C049E',
    '#F4E8E29E',
    '#54D2FA9E',
    '#33E8C39E',
    '#D6418E9E',
    '#7575759E',
    '#D809099E',
  ];

  const chartJsDataLabels: Array<any> = [];
  data.slice(0, 15).forEach((elem: any) => {
    chartJsDataLabels.push([elem.country]);
  });

  const chartJsDataCounts: Array<any> = [];
  data.slice(0, 15).forEach((elem: any) => {
    chartJsDataCounts.push([elem.cases]);
  });

  const chartJsDataBorderColors: Array<any> = [];
  chartJsDataBGColors.forEach((elem, index: number) => {
    chartJsDataBorderColors.push(chartJsDataBGColors[index].slice(0, -2));
  });

  const chartJsData = {
    labels: chartJsDataLabels,
    datasets: [
      {
        label: 'Статистика заражений Covid-19 по странам',
        data: chartJsDataCounts,
        backgroundColor: chartJsDataBGColors,
        borderColor: chartJsDataBorderColors,
        borderWidth: 2,
      },
    ],
  };

  return <Pie data={chartJsData} className={styles['pie']} />;
};

export default PieCountries;
