<<<<<<< HEAD
import axios from 'axios';

export const getSettings=(url)=>dispatch=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
         .then(async res=>{
          let data = await res.data;
          dispatch(settings(data))
        })
        .catch(error=>
            dispatch(settings(error)))
=======
import axios from "axios";
import { getSettings } from "./actions";


export const GetSettings = (url) => dispatch => {
    console.log(url)
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
      .then(async res => {
        let data = await res.data;
        dispatch(getSettings(data))
      }).catch(error => console.log(error))
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
}