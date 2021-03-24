import
  {
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
      if(action.payload.isError){
        state = {
           ...state,
           errorMessages: action.payload.errors,
        } 
      }else{
        state = {
          ...state,
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
     state = {
       user:action.payload,
       isLoged:true
     }
    break;  
   default:
    state = { ...state }
    break;
  }

  return state;
}

export default entryReducer;