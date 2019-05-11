import * as types from '../constants/actionTypes';
import { Action } from '../actions/types';


const initialState = false;

export default (state: boolean = initialState, action: Action): boolean => {
  switch (action.type) {
    case types.SET_IS_LOADING:
      return action.value;
    default:
      return state;
  }
};
