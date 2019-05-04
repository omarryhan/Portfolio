import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from '../reducers';


export default (initialState) => createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools({ })(applyMiddleware(thunk)),
);
