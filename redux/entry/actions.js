import
  {
    INCREASE_BALANCE, LOGIN,
    LOGOUT, PAY_BY_BALANCE, REGISTER,
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

 export const IncreaseBalance = (data) => {
  return {
      type: INCREASE_BALANCE,
      payload: data
  }
}

export const PayByBalance = (data) => {
  return {
      type: PAY_BY_BALANCE,
      payload: data
  }
}

