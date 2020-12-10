import {
  IReceiveData,
  ISymbolsReceive,
} from '@features/Quotes/types/receive/IReceiveData';
import { INIT_MESSAGE_ID } from '@features/Quotes/utils/constants';

export const isSymbolsReceive = (
  receive: IReceiveData,
): receive is ISymbolsReceive =>
  'id' in receive && receive.id === INIT_MESSAGE_ID;
