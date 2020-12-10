import { ITickerParam } from '@features/Quotes/types/receive/ITickerParam';
import { ISymbolResult } from '@features/Quotes/types/receive/ISymbolResult';

export type ITicker = ISymbolResult & { params?: ITickerParam };

export type ITickerWithParam = ISymbolResult & { params: ITickerParam };
