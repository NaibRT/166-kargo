import axios from 'axios'
import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import store from '../redux/store'
import {
 getDataAction
} from '../redux/getData/getDataActions'

function GetData(props) {
  useEffect(()=>{
    props.getDataAction('https://jsonplaceholder.typicode.com/posts',{});
  },[])
 return (
  <div>
    {
      props.SpotifyReducer.isloading ?
      <h1>Loading</h1>  :
      <h1>Spotify Data</h1>
    }
  </div>
 )
}

// export async function getStaticProps(context){
//   console.log('context',context)
//  console.log('worked')
//  await store.dispatch(getDataAction('https://jsonplaceholder.typicode.com/posts',{}));

//   return { props: {}}
// }

// GetData.getInitialProps = async ({ store }) => await store.dispatch(getDataAction('https://jsonplaceholder.typicode.com/posts',{}));

const mapStateToProp = state => ({
  SpotifyReducer: state.SpotifyReducer
});

const mapDispatchToProp = { getDataAction }


export default connect(mapStateToProp, mapDispatchToProp)(React.memo(GetData))
