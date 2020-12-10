import { useEffect, useMemo } from 'react';

import { WS_URL } from '@features/Quotes/utils/constants';

export const useWs = (): WebSocket => {
  const socket = useMemo(() => new WebSocket(WS_URL), []);

  useEffect(() => () => socket.close(), [socket]);

  return socket;
};
