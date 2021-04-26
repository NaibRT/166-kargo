
import axios from "axios";
import router from "next/router";
import Swal from "sweetalert2";
import { IncreaseBalance, login, logout, PayByBalance, register, updateUser } from "./actions";

export const Login = (url,data,headers = {}) => dispatch => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
        headers:headers,
      })
      .then(async res => {
        let data = await res.data;
        dispatch(login(data))
        router.push('/packages')
      }).catch(errors => {
        dispatch(login({isError:true,errors:errors.response.data}))
      })
}


export const UserRegister = (url,data,headers = {}) => dispatch => {
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
      headers:headers,
    })
    .then(async res => {
      Swal.fire({
        text: 'Əməliyyat uğurla tamamlandı',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(res => {
        if(res.isConfirmed){
          router.push('/myaddresses');
        }
      })
      let data = await res.data;
      dispatch(register(data))
    }).catch(err => {
      dispatch(register({isError:true,errors:err.response.data}))
    })
}

export const LogOut = () => dispatch => {
   console.log('wordek logout')
    dispatch(logout())
}

export const UpdateUser = (url,data,headers = {}) => dispatch => {

    axios.put(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
        headers: headers
      })
      .then( res => {
        dispatch(updateUser(res.data))
         Swal.fire({
           text: 'Əməliyyat uğurla yerinə yetirildi',
           icon: 'success',
           confirmButtonText: 'OK',
         })
      })
      .catch(err => {
        dispatch(updateUser({isError:true,errors:err.response.data}))
      })
  
}

  export const PayByBalanceAction = (url,data,headers) => dispatch => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
      headers:headers,
    }).then(res => {
      dispatch(PayByBalance(res.data))
      Swal.fire({
        text: 'Əməliyyat uğurla tamamlandı',
        icon: 'success',
        confirmButtonText: 'OK',
      })
    }).catch(err => console.log(err));
  }

export const IncreaseBalanceAction = (balance) => dispatch => {
    dispatch(IncreaseBalance(balance))
}



