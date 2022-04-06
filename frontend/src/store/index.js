import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import wineryReducer from './winery';
import sessionReducer from './session';
import formReducer from './form';
import {likeReducer} from './like'
import { tastingReducer } from './tasting';
import reviewReducer from './review';
import mapsReducer from './maps';
import searchReducer from './search';
let enhancer;

if(process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk)
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = preloadedState => {
    return createStore(rootReducer, preloadedState, enhancer)
}

const rootReducer = combineReducers({
    sessions: sessionReducer,
    wineries: wineryReducer,
    search: searchReducer,
    like: likeReducer,
    tasting: tastingReducer,
    reviews: reviewReducer,
    maps: mapsReducer
})

export default configureStore;
