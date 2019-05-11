import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';
import { RootStateType } from '../reducers/types';


export default (initialState: RootStateType): ReturnType<typeof createStore> => createStore(
  rootReducer,
  initialState,
  composeWithDevTools({})(applyMiddleware(thunk)),
);
