import { combineReducers } from 'redux';
import EntryReducer from '../entry/reducer';
import SpotifyReducer from '../getData/reducer';


const rootReducers = combineReducers({
 EntryReducer,
 SpotifyReducer
})
export default rootReducers;