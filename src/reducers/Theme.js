import * as types from '../constants/types';

const initialState = {
  isDark: false,
};

export default (state = initialState, action) => {
  const update = (current => next => ({ ...current, ...next }))(state);

  switch (action.type) {
    case types.SET_IS_DARK_THEME:
      return update({ isDark: action.value });

    default:
      return state;
  }
};
