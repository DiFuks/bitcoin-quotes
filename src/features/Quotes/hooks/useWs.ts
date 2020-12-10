import { useEffect, useRef } from 'react';

import { WS_URL } from '@features/Quotes/utils/constants';

export const useWs = (): WebSocket => {
  const wsRef = useRef(new WebSocket(WS_URL));

  useEffect(() => () => wsRef.current.close(), []);

  return wsRef.current;
};
