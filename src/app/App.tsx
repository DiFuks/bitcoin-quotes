import { FC } from 'react';

import { Quotes } from '@features/Quotes/Quotes';
import { Layout } from '@common/components/Layout/Layout';

export const App: FC = () => (
  <Layout>
    <Quotes />
  </Layout>
);
