import React from 'react';

interface TableTestProps {
  data: any;
}

export const TableTest: React.FC<TableTestProps> = ({ data }) => {
  const { thead, tbody } = data;
  const theadContent = thead.map((elem: any, i: number) => {
    return <th key={i}>{elem}</th>;
  });
  const tbodyContent = tbody.map((elem: any, i: number) => {
    return (
      <tr key={i}>
        {elem.map((elem: any, i: number) => {
          return <td key={i}>{elem}</td>;
        })}
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>{theadContent}</tr>
      </thead>
      <tbody>{tbodyContent}</tbody>
    </table>
  );
};