import authCurrentUser from './auth.types';

const initialState = {
  token: null,
  isLoading: true,
  errMessage: undefined,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authCurrentUser.START_LOADING_USER:
      return { ...state, isLoading: true };
    case authCurrentUser.SUCCESS_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    case authCurrentUser.FAIL_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        errMessage: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
