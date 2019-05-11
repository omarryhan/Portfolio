import { SET_IS_LOADING } from '../constants/actionTypes';
import { IsetIsLoadingAction } from './types';


export const setIsLoading = (isLoading: boolean): IsetIsLoadingAction => Object.freeze({
  type: SET_IS_LOADING,
  value: isLoading,
});
