import React from 'react';
import * as Bootstrap from 'react-bootstrap';

interface TableTestProps {
  data?: any;
}

const TableTest: React.FC<TableTestProps> = props => {
  const { thead, tbody } = props.data;
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
    <Bootstrap.Table striped bordered hover>
      <thead>
        <tr>{theadContent}</tr>
      </thead>
      <tbody>{tbodyContent}</tbody>
    </Bootstrap.Table>
  );
};

export default TableTest;
