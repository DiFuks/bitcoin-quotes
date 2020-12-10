import { useCallback, useRef } from 'react';

import { isSymbolsReceive } from '@features/Quotes/typeGuards/isSymbolsReceive';
import {
  DATA_UPDATE_TIMEOUT,
  INIT_MESSAGE_ID,
} from '@features/Quotes/utils/constants';
import { isTickerReceive } from '@features/Quotes/typeGuards/isTickerReceive';
import { isTickersWithParam } from '@features/Quotes/typeGuards/isTickersWithParam';
import { getTableDataFromTickersWithParam } from '@features/Quotes/utils/getTableDataFromTickersWithParam';
import { ITicker } from '@features/Quotes/types/ITickers';
import { ITickerTableData } from '@features/Quotes/types/ITickerTableData';

interface IParams {
  socket: WebSocket;
  setData(data: ITickerTableData[]): void;
}

export const useWsOnMessage = ({
  setData,
  socket,
}: IParams): ((event: MessageEvent) => void) => {
  const timeoutIdRef = useRef<number | undefined>();

  const tmpTickersRef = useRef<ITicker[]>([]);

  return useCallback(
    (event: MessageEvent) => {
      const receive = JSON.parse(event.data);

      if (isSymbolsReceive(receive)) {
        tmpTickersRef.current = receive.result;

        receive.result.forEach(({ id }, index) => {
          socket.send(
            JSON.stringify({
              id: index + INIT_MESSAGE_ID + 1,
              method: 'subscribeTicker',
              params: {
                symbol: id,
              },
            }),
          );
        });
      }

      if (isTickerReceive(receive)) {
        tmpTickersRef.current = tmpTickersRef.current?.map((ticker) => {
          const params =
            receive.params.symbol === ticker.id
              ? receive.params
              : ticker.params;

          return {
            ...ticker,
            params,
          };
        });

        if (!isTickersWithParam(tmpTickersRef.current)) {
          return;
        }

        if (timeoutIdRef.current !== undefined) {
          return;
        }

        timeoutIdRef.current = window.setTimeout(() => {
          if (!isTickersWithParam(tmpTickersRef.current)) {
            return;
          }

          const data = getTableDataFromTickersWithParam(tmpTickersRef.current);

          setData(data);

          clearTimeout(timeoutIdRef.current);

          timeoutIdRef.current = undefined;
        }, DATA_UPDATE_TIMEOUT);
      }
    },
    [socket, setData],
  );
};
