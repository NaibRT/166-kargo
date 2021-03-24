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
<<<<<<< HEAD
     state={
       user:{
         ...action.payload,
       },
       isLoged:action.payload.err ? false : true,
     }
=======
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

>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
    break;
   case LOGOUT:
      state = {
        user:{},
        errorMessages:[],
        isLoged:false
      }
    break; 
   case REGISTER:
<<<<<<< HEAD
=======
     state = {
       user:action.payload,
       isLoged:true
     }
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
    break;  
   default:
    state = { ...state }
    break;
  }

  return state;
}

export default entryReducer;