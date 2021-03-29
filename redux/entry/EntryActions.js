import axios from 'axios';
export const Login=(url, data, headers={})=>dispatch=>{

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
        headers:headers
      })
         .then(async res=>{
          let data = await res.data;
          dispatch(login(data))
        })
        .catch(errors=>
            dispatch(login({isError:true,errors})))
}
