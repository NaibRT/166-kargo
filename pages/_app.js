import '../styles/globals.css'
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import Store from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import {IntlProvider} from 'react-intl'
import { useRouter } from 'next/router'
import az from '../locale/az.json'
import en from '../locale/en.json'
import ru from '../locale/ru.json'


const message = {
  az:az,
  en:en,
  ru:ru,
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
                <Component {...pageProps} />
          </IntlProvider>
        </PersistGate>
      </Provider>
    )
}


