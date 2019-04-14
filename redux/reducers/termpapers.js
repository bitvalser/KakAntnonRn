import { TermpapersAction } from '../actions/termpapers';

const initialState = {
  isLoading: false,
  data: null
};

export const termpapers = (state = initialState, action) => {
  switch (action.type) {
    case TermpapersAction.LOAD_TERMPAPERS:
      return {
        ...state,
        isLoading: true
      };
    case TermpapersAction.LOAD_TERMPAPERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case TermpapersAction.LOAD_TERMPAPERS_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case TermpapersAction.CREATE_TERMPAPER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};
