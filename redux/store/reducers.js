import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import EntryReducer from '../entry/reducer';
import SpotifyReducer from '../getData/reducer';
import SettingReducer from '../settings/reducer';




const persistConfig = {
 key: 'root',
 storage: storage,
 whitelist: [
     'entry',
     
    ]
}

const rootReducers = combineReducers({
 entry: EntryReducer,
 spotify: SpotifyReducer,
 settings: SettingReducer
})

export default persistReducer(persistConfig, rootReducers);