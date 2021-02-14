import {
 LOGIN,
 LOGOUT,
 REGISTER
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