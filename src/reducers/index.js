import { combineReducers } from 'redux';

import * as types from '../constants/types';

import theme from './Theme';


const isLoading = (state = false, action) => {
  switch (action.type) {
    case types.SET_IS_LOADING:
      return action.value;
    default:
      return state;
  }
};

export default () => combineReducers({
  isLoading,
  theme,
});
