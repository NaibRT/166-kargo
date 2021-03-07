import '../public/assets/styles/globals.scss';
import React from 'react';
import { Provider } from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import Store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {IntlProvider} from 'react-intl';
import { useRouter } from 'next/router';
import Layout from '../components/layout'


import AZ from '../locale/az.json';
import EN from '../locale/en.json';
import RU from '../locale/ru.json';
import UA from '../locale/ua.json';


const message = {
  az:AZ,
  en:EN,
  ru:RU,
  ua:UA,
}

export default function MyApp({ Component, pageProps }){
  // static async getInitialProps({Component, ctx}){
  //   const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  //   return { appProps: appProps };
  // }
   const { locale, locales, defaultLocale } = useRouter()
   console.log(process.env.NEXT_PUBLIC_API_URL)
    return (
      <Provider store={Store.store}>
        <PersistGate loading={null} persistor={Store.persistor}>
          <IntlProvider locale={locale} messages={message[locale]}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </IntlProvider>
        </PersistGate>
      </Provider>
    )
}


