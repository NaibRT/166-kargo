<<<<<<< HEAD
import {
  LOGIN,
  LOGOUT,
  REGISTER
} from './actionTypes'
=======
import
  {
    LOGIN,
    LOGOUT,
    REGISTER
  } from './actionTypes'
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9

export const login = (data) => {
  return {
    type: LOGIN,
    payload: data
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const register = (data) => {
<<<<<<< HEAD
  return {
    type: REGISTER,
    payload: data
  }
}

=======
 return {
  type: REGISTER,
  payload: data
 }
}
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
