import { useCallback } from 'react';

import { INIT_MESSAGE_ID } from '@features/Quotes/utils/constants';

interface IParams {
  socket: WebSocket;
}

export const useWsOnOpen = ({ socket }: IParams): (() => void) =>
  useCallback(() => {
    socket.send(
      JSON.stringify({
        id: INIT_MESSAGE_ID,
        method: 'getSymbols',
        params: {},
      }),
    );
  }, [socket]);
