import {GETSETTING} from './actionTypes';

export const settings=(data)=>{
    return{
        type:GETSETTING,
        payload:data
    }
}
