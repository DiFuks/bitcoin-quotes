import { ITicker, ITickerWithParam } from '@features/Quotes/types/ITickers';

export const isTickersWithParam = (
  tickers: ITicker[],
): tickers is ITickerWithParam[] => tickers.every((ticker) => !!ticker.params);
