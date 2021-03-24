import axios from "axios";
import { getSettings } from "./actions";


export const GetSettings = (url) => dispatch => {
    console.log(url)
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
      .then(async res => {
        let data = await res.data;
        dispatch(getSettings(data))
      }).catch(error => console.log(error))
}