import { useMemo } from 'react';
import { Column } from 'react-table';

import { ITickerTableData } from '@features/Quotes/types/ITickerTableData';

const formatEmptyData = (value: number): number | string =>
  Number.isNaN(value) ? 'N/A' : value;

export const useColumns = (): Array<Column<ITickerTableData>> =>
  useMemo(
    () =>
      [
        {
          Header: 'Ticker',
          accessor: 'id',
        },
        {
          Header: 'Bid',
          accessor: 'bid',
          Cell: ({ value }) => formatEmptyData(value),
        },
        {
          Header: 'Ask',
          accessor: 'ask',
          Cell: ({ value }) => formatEmptyData(value),
        },
        {
          Header: 'High',
          accessor: 'high',
        },
        {
          Header: 'Low',
          accessor: 'low',
        },
        {
          Header: 'Last',
          accessor: 'last',
        },
      ] as Array<Column<ITickerTableData>>,
    [],
  );
