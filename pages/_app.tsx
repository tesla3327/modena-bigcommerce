import React, { useEffect } from 'react';
import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import { analytics, localTracker } from 'lib/tracking/local-tracker';
import { BasketSummary } from '@/components/commerce/cart';
import { FullWidth } from '@/components/layouts/fullWidth';
import { BasketContextProvider } from '@/components/commerce/cart/providers/basketProvider';
import { Tracker } from '@uniformdev/optimize-tracker-common';
import { IntentVector } from '@uniformdev/optimize-common';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

export type UniformConfAppProps = AppProps & {
  tracker?: Tracker;
  scoring?: IntentVector;
};

export default function MyApp({ Component, pageProps, tracker }: UniformConfAppProps) {
  const trackerInstance = tracker || localTracker;

  useEffect(() => {
    if (!pageProps) {
      return;
    }

    analytics.page();
  }, [pageProps]);

  return (
    <UniformTracker trackerInstance={trackerInstance}>
      <BasketContextProvider>
        <FullWidth>
          <Component {...pageProps} />
          <BasketSummary id="basket-summary" />
        </FullWidth>
      </BasketContextProvider>
    </UniformTracker>
  );
}
