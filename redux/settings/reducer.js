<<<<<<< HEAD
import { GETSETTING } from '../settings/actionTypes';

const initialState = {
    data:{},
    isloaded: false
}
const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETSETTING:
            state = {
                data:action.payload,
                isloaded: true
            }
            break;
        default:
            state = {
                ...state
            }
            break;
    }
    return state
}

export default SettingsReducer
=======

import { GETSETTING } from "./actionTypes";

const initialState = {
    data: {},
    isloaded: false
}

const SettingsReducer = (state = initialState, action) => {

     switch (action.type) {
         case GETSETTING:
               state = {
                   data: action.payload,
                   isloaded:true
               }
             break;
         default:
             state={
                 ...state
             }
             break;
     }

     return state;
}

export default SettingsReducer;
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
