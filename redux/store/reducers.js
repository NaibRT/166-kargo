import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import EntryReducer from '../entry/reducer';
import SpotifyReducer from '../getData/reducer';
<<<<<<< HEAD
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import SettingsReducer from '../settings/reducer'
=======
import SettingReducer from '../settings/reducer';

>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9



const persistConfig = {
 key: 'root',
<<<<<<< HEAD
 storage:storage,
 whitelist: ['entry']
=======
 storage: storage,
 whitelist: [
     'entry',
     
    ]
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
}

const rootReducers = combineReducers({
 entry: EntryReducer,
 spotify: SpotifyReducer,
<<<<<<< HEAD
 settings: SettingsReducer
=======
 settings: SettingReducer
>>>>>>> 2919030bf44e73720f23685aba28e216f1862cb9
})

export default persistReducer(persistConfig, rootReducers);