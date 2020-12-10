import { useMemo } from 'react';
import { Column } from 'react-table';

import { ITickerTableData } from '@features/Quotes/types/ITickerTableData';

export const useColumns = (): Array<Column<ITickerTableData>> =>
  useMemo(
    () => [
      {
        Header: 'Ticker',
        accessor: 'id',
      },
      {
        Header: 'Bid',
        accessor: 'bid',
      },
      {
        Header: 'Ask',
        accessor: 'ask',
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
    ],
    [],
  );
