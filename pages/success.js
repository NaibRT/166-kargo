import React from 'react'
import AsideMenu from "../components/aside-menu/index"
import Aside from '../components/aside/aside'
import Main from '../components/main/main'
import Page from '../components/page/page'
import ResponcePage from '../components/ResponcePage/ResponcePage'

 function SuccessPage(props) {
    return (
        <Page className="bg-bg pt-lg pb-lg">
        <Aside className="mr-sm">
          <AsideMenu />
        </Aside>
        <Main>
        <ResponcePage url='/assets/icons/success.svg'
          msg={props.message}
        />
        </Main>
        </Page>
    )
}

export async function getInitialProps({req}) {
  return {
    props: {
      balance: req.headers['balance'],
      message: req.headers['message'],
    },
  }

}

export default SuccessPage
