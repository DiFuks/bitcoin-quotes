import { FC } from 'react';

import { Table } from '@common/components/Table/Table';
import { useTickerTableData } from '@features/Quotes/hooks/useTickerTableData';
import { useColumns } from '@features/Quotes/hooks/useColumns';

export const Quotes: FC = () => {
  const data = useTickerTableData();

  const columns = useColumns();

  return <Table data={data} columns={columns} />;
};
