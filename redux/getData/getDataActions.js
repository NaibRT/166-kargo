import axios from 'axios'
import {
 getData
} from './actions'

export const getDataAction = (url, header) => 
             dispatch => {
              axios.get(url, header)
              .then(res => {
               dispatch(getData(res.data))
              })
             } 

