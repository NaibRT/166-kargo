import '../styles/globals.css'
import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../redux/store'


class MyApp extends App {
  static async getInitialProps({Component, ctx}){
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { appProps: appProps };
  }
  render() {
    const { Component, appProps } = this.props
    return (
      <Provider store={store}>
       <Component {...appProps} />
      </Provider>
    )
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp)
