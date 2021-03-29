
import axios from "axios";
import router from "next/router";
import Swal from "sweetalert2";
import { login, logout, register, updateUser } from "./actions";

export const Login = (url,data,headers = {}) => dispatch => {
    console.log(url)
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
        headers:headers,
      })
      .then(async res => {
        let data = await res.data;
        dispatch(login(data))
      }).catch(errors => {
        dispatch(login({isError:true,errors:errors.response.data}))
      })
}

export const UserRegister = (url,data,headers = {}) => dispatch => {
  console.log(url)
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}${url}`,data,{
      headers:headers,
    })
    .then(async res => {
      Swal.fire({
        title: 'Success!',
        text: 'Əməliyyat uğurla tamamlandı',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(res => {
        if(res.isConfirmed){
          router.push('/')
        }
      })
      let data = await res.data;
      dispatch(register(data))
    }).catch(err => {
      dispatch(register({isError:true,errors:err.response.data}))
    })
}

export const LogOut = () => dispatch => {
    dispatch(logout())
}

export const UpdateUser = (data) => dispatch => {
  dispatch(updateUser(data))
}



