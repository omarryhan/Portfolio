import { combineReducers } from 'redux';

import theme from './theme';
import isLoading from './isLoading';


export default combineReducers({
  isLoading,
  theme,
});
