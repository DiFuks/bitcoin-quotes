import { FC } from 'react';
import styled from 'styled-components';

import { Table } from '@common/components/Table/Table';
import { useTickerTableData } from '@features/Quotes/hooks/useTickerTableData';
import { useColumns } from '@features/Quotes/hooks/useColumns';

export const Quotes: FC = () => {
  const data = useTickerTableData();

  const columns = useColumns();

  return (
    <SQuotes>
      <h1>Bitcoin quotes</h1>
      {data.length === 0 ? (
        <div>Loading init information...</div>
      ) : (
        <Table
          options={{
            data,
            columns,
            autoResetSortBy: false,
            initialState: {
              sortBy: [{ id: 'last', desc: true }],
            },
          }}
        />
      )}
    </SQuotes>
  );
};

const SQuotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
