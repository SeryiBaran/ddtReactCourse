import { ReactNode } from 'react';

import { generateKey } from '@/utils/key';

interface ITableTest {
  data: {
    thead: string[] | ReactNode[];
    tbody: string[][] | ReactNode[][];
  };
}

export const TableTest = ({ data }: ITableTest) => {
  const { thead, tbody } = data;
  const theadContent = thead.map((elem: string | ReactNode) => {
    return <th key={generateKey()}>{elem}</th>;
  });
  const tbodyContent = tbody.map((elem: string[] | ReactNode[]) => {
    return (
      <tr key={generateKey()}>
        {elem.map((elem2: string | ReactNode) => {
          return <td key={generateKey()}>{elem2}</td>;
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
