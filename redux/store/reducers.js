import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import EntryReducer from '../entry/reducer';
import SpotifyReducer from '../getData/reducer';
import SettingReducer from '../settings/reducer';
import storage from '../storage';




const rootPersistConfig = {
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

export default persistReducer(rootPersistConfig, rootReducers);