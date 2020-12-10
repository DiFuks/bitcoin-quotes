import { ITickerWithParam } from '@features/Quotes/types/ITickers';
import { ITickerTableData } from '@features/Quotes/types/ITickerTableData';

export const getTableDataFromTickersWithParam = (
  tickers: ITickerWithParam[],
): ITickerTableData[] =>
  tickers
    .map((ticker) => ({
      id: ticker.id,
      bid: Number.parseFloat(ticker.params.bid),
      ask: Number.parseFloat(ticker.params.ask),
      high: Number.parseFloat(ticker.params.high),
      low: Number.parseFloat(ticker.params.low),
      last: Number.parseFloat(ticker.params.last),
    }))
    .sort((a, b) => b.last - a.last)
    .slice(0, 50);
