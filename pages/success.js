import React from 'react'
import ResponcePage from '../components/ResponcePage/ResponcePage'
import Aside from '../components/aside/aside'
import Main from '../components/main/main'
import Page from '../components/page/page'
import AsideMenu from "../components/aside-menu/index";

export default function SuccessPage() {
    return (
        <Page className="bg-bg pt-lg pb-lg">
        <Aside className="mr-sm">
          <AsideMenu />
        </Aside>
        <Main>
        <ResponcePage url='/assets/icons/success.svg'/>
        </Main>
        </Page>
    )
}
