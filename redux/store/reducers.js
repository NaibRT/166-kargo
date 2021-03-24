import { combineReducers } from 'redux';
import EntryReducer from '../entry/reducer';
import SpotifyReducer from '../getData/reducer';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import SettingsReducer from '../settings/reducer'



const persistConfig = {
 key: 'root',
 storage:storage,
 whitelist: ['entry']
}

const rootReducers = combineReducers({
 entry: EntryReducer,
 spotify: SpotifyReducer,
 settings: SettingsReducer
})

export default persistReducer(persistConfig, rootReducers);