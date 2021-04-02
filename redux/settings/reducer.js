import { REHYDRATE } from 'redux-persist';
import { GETSETTING } from "./actionTypes";

const initialState = {
    data: {},
    isloaded: false
}

const SettingsReducer = (state = initialState, action) => {

     switch (action.type) {
        case REHYDRATE:
            break;
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
