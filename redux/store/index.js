import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

import { persistStore } from 'redux-persist'


const middleware = [
 thunk
];

const enhancers = [
 applyMiddleware(...middleware),
]

const store = createStore(
 rootReducers,
 composeWithDevTools(...enhancers)
 )
const persistor = persistStore(store)

export default { store, persistor }