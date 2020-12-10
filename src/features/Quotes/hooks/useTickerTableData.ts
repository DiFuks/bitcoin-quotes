import { useEffect, useState } from 'react';

import { useWsOnMessage } from '@features/Quotes/hooks/useWsOnMessage';
import { useWsOnOpen } from '@features/Quotes/hooks/useWsOnOpen';

import { ITickerTableData } from '@features/Quotes/types/ITickerTableData';
import { useWs } from '@features/Quotes/hooks/useWs';

export const useTickerTableData = (): ITickerTableData[] => {
  const [data, setData] = useState<ITickerTableData[]>([]);

  const socket = useWs();

  const onOpen = useWsOnOpen({ socket });

  const onMessage = useWsOnMessage({ setData, socket });

  useEffect(() => {
    socket.addEventListener('open', onOpen);

    socket.addEventListener('message', onMessage);

    return () => {
      socket.removeEventListener('open', onOpen);
      socket.removeEventListener('message', onMessage);
    };
  }, [onMessage, onOpen, socket]);

  return data;
};
