import {
  IReceiveData,
  ITickerReceive,
} from '@features/Quotes/types/receive/IReceiveData';

export const isTickerReceive = (
  receive: IReceiveData,
): receive is ITickerReceive =>
  'method' in receive && receive.method === 'ticker';
