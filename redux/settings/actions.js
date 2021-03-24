
import { GETSETTING } from "./actionTypes";

export const getSettings = (data) => {
    return {
     type: GETSETTING,
     payload: data
    }
   }
