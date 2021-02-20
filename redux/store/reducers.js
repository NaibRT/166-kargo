import { combineReducers } from 'redux';
import EntryReducer from '../entry/reducer';
import SpotifyReducer from '../getData/reducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
 key: 'root',
 storage,
 whitelist: ['spotify']
}

const rootReducers = combineReducers({
 entry: EntryReducer,
 spotify: SpotifyReducer
})

export default persistReducer(persistConfig, rootReducers);