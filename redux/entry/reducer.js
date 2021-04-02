 import { REHYDRATE } from 'redux-persist';
import
  {
    LOGIN,
    LOGOUT,
    REGISTER,
    UPDATE_USER
  } from './actionTypes';

const initialState = {
 user:{},
 errorMessages:{},
 isLoged:false
}

const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      break;
   case LOGIN:
      if(action.payload.isError){
        state = {
           ...state,
           errorMessages:{...action.payload.errors},
        } 
      }else{
        state = {
          ...state,
          errorMessages:{},
          user:{
            ...action.payload,
          },
          isLoged:true ,
        } 
      }

    break;
   case LOGOUT:
      state = {
        user:{},
        errorMessages:[],
        isLoged:false
      }
    break; 
   case REGISTER:
    if(action.payload.isError){
      state = {
        ...state,
        errorMessages:{...action.payload.errors},
     } 
    }else{
      state = {
        user:{...action.payload},
        errorMessages:{},
        isLoged:false
      }
    }
    break;  
    case UPDATE_USER:
      if(action.payload.isError){
        state = {
          ...state,
          user:{
            ...state.user,
          },
          errorMessages:{...action.payload.errors},
        }
      }else{
        state = {
          ...state,
          user:{
            ...state.user,
           user:{...action.payload.user} 
          },
          errorMessages:{},
        }
      }
    break;
   default:
    state = { ...state }
    break;
  }

  return state;
}

export default entryReducer;