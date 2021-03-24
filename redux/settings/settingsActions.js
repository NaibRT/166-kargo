import axios from 'axios';

export const getSettings=(url)=>dispatch=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`)
         .then(async res=>{
          let data = await res.data;
          dispatch(settings(data))
        })
        .catch(error=>
            dispatch(settings(error)))
}