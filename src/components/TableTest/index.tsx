import React from 'react';

interface ITableTest {
  data: {
    thead: string[] | React.ReactNode[];
    tbody: string[][] | React.ReactNode[][];
  };
}

export const TableTest: React.FC<ITableTest> = ({ data }) => {
  const { thead, tbody } = data;
  const theadContent = thead.map(
    (elem: string | React.ReactNode, i: number) => {
      return <th key={i}>{elem}</th>;
    },
  );
  const tbodyContent = tbody.map(
    (elem: string[] | React.ReactNode[], i: number) => {
      return (
        <tr key={i}>
          {elem.map((elem2: string | React.ReactNode, i: number) => {
            return <td key={i}>{elem2}</td>;
          })}
        </tr>
      );
    },
  );
  return (
    <table>
      <thead>
        <tr>{theadContent}</tr>
      </thead>
      <tbody>{tbodyContent}</tbody>
    </table>
  );
};
