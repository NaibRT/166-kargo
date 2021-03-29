import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducers from './reducers'



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