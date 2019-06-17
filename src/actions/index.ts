import { SET_IS_LOADING } from '../constants/actionTypes';
import { SetIsLoadingActionI } from './types';


export const setIsLoading = (isLoading: boolean): SetIsLoadingActionI => Object.freeze({
  type: SET_IS_LOADING,
  value: isLoading,
});
