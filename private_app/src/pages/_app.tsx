import { AppProps } from 'next/app';
import React from 'react';
import { AppProvider } from "@shopify/polaris";

import translations from "@shopify/polaris/locales/en.json";



const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppProvider i18n={translations}>
    <Component {...pageProps} />
  </AppProvider>
);

export default MyApp;