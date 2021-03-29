import
  {
    LOGIN,
    LOGOUT,
    REGISTER,
    UPDATE_USER
  } from './actionTypes'

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
 return {
  type: REGISTER,
  payload: data
 }
}

export const updateUser = (data) => {
  return {
   type: UPDATE_USER,
   payload: data
  }
 }

