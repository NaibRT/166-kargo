
import axios from "axios";
import { login, logout, register } from "./actions";

export const Login = (url,data,headers = {}) => dispatch => {
    console.log(url)
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
        headers:headers,
      })
      .then(async res => {
        let data = await res.data;
        dispatch(login(data))
      }).catch(errors => {
        dispatch(login({isError:true,errors:errors}))
      })
}

export const UserRegister = (url,data,headers = {}) => dispatch => {
  console.log(url)
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
      headers:headers,
    })
    .then(async res => {
      let data = await res.data;
      dispatch(register(data))
    }).catch(errors => {
      console.log(errors)
      // dispatch(login({isError:true,errors:errors}))
    })
}

export const LogOut = () => dispatch => {
    dispatch(logout())
}


