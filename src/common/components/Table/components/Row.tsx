import { HTMLAttributes, memo } from 'react';
import { Row as IRow } from 'react-table';

import { Cell } from '@common/components/Table/components/Cell';

export interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: IRow<any>;
  rowProps: HTMLAttributes<HTMLTableRowElement>;
}

export const Row = memo<IProps>(
  ({ row, rowProps }) => (
    <tr {...rowProps}>
      {row.cells.map((cell) => (
        <Cell
          {...cell.getCellProps()}
          key={cell.getCellProps().key}
          value={cell.value}
        >
          {cell.render('Cell')}
        </Cell>
      ))}
    </tr>
  ),
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.row.values) ===
    JSON.stringify(nextProps.row.values),
);
