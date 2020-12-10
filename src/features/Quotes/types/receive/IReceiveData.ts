import { ISymbolResult } from '@features/Quotes/types/receive/ISymbolResult';
import { INIT_MESSAGE_ID } from '@features/Quotes/utils/constants';
import { ITickerParam } from '@features/Quotes/types/receive/ITickerParam';

export interface IBaseReceive {
  jsonrpc: string;
}

export interface ISubscribeReceive<Method extends string, Params>
  extends IBaseReceive {
  method: Method;
  params: Params;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IResponseReceive<Result = any, ID = number>
  extends IBaseReceive {
  id: ID;
  result: Result;
}

export type ISymbolsReceive = IResponseReceive<
  ISymbolResult[],
  typeof INIT_MESSAGE_ID
>;

export type ISubscribeSuccessReceive = IResponseReceive<boolean>;

export type ITickerReceive = ISubscribeReceive<'ticker', ITickerParam>;

export type IReceiveData =
  | ISymbolsReceive
  | ISubscribeSuccessReceive
  | ITickerReceive;
