import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

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

export default store