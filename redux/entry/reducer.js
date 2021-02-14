import {
 LOGIN,
 LOGOUT,
 REGISTER
} from './actionTypes';

const initialState = {
 user:{},
 isLoged:false
}

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
   case LOGIN:
    break;
   case LOGOUT:
    break; 
   case REGISTER:
    break; 
   default:
    state = { ...state }
    break;
  }

  return state;
}

export default entryReducer;