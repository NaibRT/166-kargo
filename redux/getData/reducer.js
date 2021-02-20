
import {
 GETDATA
} from './actionTypes'

const initialState = {
 data: [],
 isLoaded: false
}

const getDataReducer = (state = initialState, action) => {
  switch (action.type) {
   case GETDATA:
      state = {
       data: action.payload,
       isLoaded: true
      }
    break;
   default:
    state = { ...state }
    break;
  }
  return state;
}

export default getDataReducer;