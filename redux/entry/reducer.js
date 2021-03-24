import {
 LOGIN,
 LOGOUT,
 REGISTER
} from './actionTypes';

const initialState = {
 user:{},
 errorMessages:[],
 isLoged:false
}

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
   case LOGIN:
     state={
       user:{
         ...action.payload,
       },
       isLoged:action.payload.err ? false : true,
     }
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