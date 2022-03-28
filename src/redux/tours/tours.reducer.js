import toursCollectionTypes from './tours.types';

const initialState = {
  tours: [],
  isLoading: true,
  errMessage: undefined,
};

const toursReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case toursCollectionTypes.START:
      return { ...state, isLoading: true };
    case toursCollectionTypes.SUCCESS:
      return {
        ...state,
        isLoading: false,
        tours: payload,
      };
    case toursCollectionTypes.FAIL:
      return {
        ...state,
        isLoading: false,
        errMessage: payload,
      };
    default:
      return state;
  }
};

export default toursReducer;
