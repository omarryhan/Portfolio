import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from '../reducers';
import { RootStateType } from '../reducers/types';


export default (initialState: RootStateType): ReturnType<typeof createStore> => createStore(
  createRootReducer(),
  initialState,
  composeWithDevTools({})(applyMiddleware(thunk)),
);
