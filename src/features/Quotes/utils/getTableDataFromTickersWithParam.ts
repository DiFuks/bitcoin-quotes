import { ITickerWithParam } from '@features/Quotes/types/ITickers';
import { ITickerTableData } from '@features/Quotes/types/ITickerTableData';
import { MAX_DATA_COUNT } from '@features/Quotes/utils/constants';

export const getTableDataFromTickersWithParam = (
  tickers: ITickerWithParam[],
): ITickerTableData[] =>
  tickers
    .map((ticker) => ({
      id: `${ticker.baseCurrency} / ${ticker.feeCurrency}`,
      bid: Number.parseFloat(ticker.params.bid),
      ask: Number.parseFloat(ticker.params.ask),
      high: Number.parseFloat(ticker.params.high),
      low: Number.parseFloat(ticker.params.low),
      last: Number.parseFloat(ticker.params.last),
    }))
    .sort((a, b) => b.last - a.last)
    .slice(0, MAX_DATA_COUNT);
