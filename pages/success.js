import React from 'react'
import { connect } from "react-redux"
import AsideMenu from "../components/aside-menu/index"
import Aside from '../components/aside/aside'
import Main from '../components/main/main'
import Page from '../components/page/page'
import ResponcePage from '../components/ResponcePage/ResponcePage'
import
  {
    IncreaseBalanceAction
  } from '../redux/entry/entryActions'

 function SuccessPage(props) {
   useLayoutEffect(() => {
     
   },[])
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

export async function getServerSideProps({query}) {

  return {
    props: {
      balance: query.balance,
      message: query.message,
    },
  }

}

const mapDispatchToProps = {
  IncreaseBalanceAction
}

export default connect(mapDispatchToProps)(memo(SuccessPage))
