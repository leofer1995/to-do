import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger'
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk,logger),
    )
);

export default store