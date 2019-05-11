import { SET_IS_LOADING } from '../constants/actionTypes';
import { SetIsLoadingAction } from './types';


export const setIsLoading = (isLoading: boolean): SetIsLoadingAction => Object.freeze({
  type: SET_IS_LOADING,
  value: isLoading,
});
