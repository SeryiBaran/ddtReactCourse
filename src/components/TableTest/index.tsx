import { FC, ReactNode } from 'react';

interface ITableTest {
  data: {
    thead: string[] | ReactNode[];
    tbody: string[][] | ReactNode[][];
  };
}

export const TableTest: FC<ITableTest> = ({ data }) => {
  const { thead, tbody } = data;
  const theadContent = thead.map((elem: string | ReactNode, i: number) => {
    return <th key={i}>{elem}</th>;
  });
  const tbodyContent = tbody.map((elem: string[] | ReactNode[], i: number) => {
    return (
      <tr key={i}>
        {elem.map((elem2: string | ReactNode, i: number) => {
          return <td key={i}>{elem2}</td>;
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
