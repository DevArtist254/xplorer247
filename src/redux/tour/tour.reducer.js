import toursCollectionTypes from './tour.types';

const initialState = {
  tour: null,
  isLoading: true,
  errMessage: undefined,
};

const tourReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case toursCollectionTypes.START_TOUR:
      return { ...state, isLoading: true };
    case toursCollectionTypes.SUCCESS_TOUR:
      return {
        ...state,
        isLoading: false,
        tour: payload,
      };
    case toursCollectionTypes.FAIL_TOUR:
      return {
        ...state,
        isLoading: false,
        errMessage: payload,
      };
    default:
      return state;
  }
};

export default tourReducer;
