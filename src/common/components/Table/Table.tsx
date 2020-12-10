import { TableOptions, useSortBy, useTable } from 'react-table';
import { ReactElement } from 'react';
import styled from 'styled-components';

import { Row } from '@common/components/Table/components/Row';
import { themeSelector } from '@common/utils/themeSelector';

interface IProps<Data extends object = {}> {
  options: TableOptions<Data>;
}

export const Table: <Data extends object>(
  props: IProps<Data>,
) => ReactElement = ({ options }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setSortBy,
  } = useTable(options, useSortBy);

  return (
    <STable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getToggleHiddenProps())}
                onClick={() =>
                  setSortBy([{ id: column.id, desc: !column.isSortedDesc }])
                }
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          const rowProps = row.getRowProps();

          return <Row row={row} key={rowProps.key} rowProps={rowProps} />;
        })}
      </tbody>
    </STable>
  );
};

const STable = styled.table`
  border-collapse: collapse;

  th {
    text-align: left;
    font-weight: 600;
    user-select: none;

    span {
      font-size: 15px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  td,
  th {
    box-shadow: rgb(225, 229, 234) 0px -1px 0px 0px inset;
    min-width: 120px;
    font-size: 16px;
    height: 36px;
    text-align: right;

    &:first-child {
      text-align: left;
    }
  }

  tr:nth-child(2n) {
    background: ${themeSelector.backgroundSecondary};
    transition: background-color 300ms;
  }

  tr:last-child td {
    box-shadow: none;
  }
`;
