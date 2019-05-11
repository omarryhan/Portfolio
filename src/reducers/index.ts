import { combineReducers } from 'redux';

import theme from './theme';
import isLoading from './isLoading';


const rootReducer = () => combineReducers({
  isLoading,
  theme,
});

export default rootReducer;

export type rootReducerType = ReturnType<typeof rootReducer>;
