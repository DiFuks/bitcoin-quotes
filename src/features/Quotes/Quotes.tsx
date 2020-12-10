import React, { FC, lazy, Suspense } from 'react';
import styled from 'styled-components';

import { Column } from 'react-table';

import { useTickerTableData } from '@features/Quotes/hooks/useTickerTableData';
import { useColumns } from '@features/Quotes/hooks/useColumns';

const Table = lazy(() => import('@common/components/Table/Table'));

export const Quotes: FC = () => {
  const data = useTickerTableData();

  const columns = useColumns();

  const fallback = <div>Loading init information...</div>;

  return (
    <SQuotes>
      <Suspense fallback={fallback}>
        <h1>Bitcoin quotes</h1>
        {data.length === 0 ? (
          fallback
        ) : (
          <Table
            options={{
              data,
              columns: columns as Array<Column<object>>,
              autoResetSortBy: false,
              initialState: {
                sortBy: [{ id: 'last', desc: true }],
              },
            }}
          />
        )}
      </Suspense>
    </SQuotes>
  );
};

const SQuotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
