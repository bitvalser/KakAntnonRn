import { AchivesAction } from '../actions/achives';

const initialState = {
  isLoading: false,
  isLoadingALl: false,
  data: null,
  allData: null
};

export const achives = (state = initialState, action) => {
  switch (action.type) {
    case AchivesAction.LOAD_ALL_ACHIVES:
      return {
        ...state,
        isLoadingAll: true
      };
    case AchivesAction.LOAD_ACHIVES:
      return {
        ...state,
        isLoading: true
      };
    case AchivesAction.LOAD_ACHIVES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case AchivesAction.LOAD_ALL_ACHIVES_FAILED:
    case AchivesAction.LOAD_ACHIVES_FAILED:
      return {
        ...state,
        isLoadingAll: false,
        isLoading: false
      };
    case AchivesAction.LOAD_ALL_ACHIVES_SUCCESS:
      return {
        ...state,
        isLoadingAll: false,
        allData: action.payload
      };
    case AchivesAction.CREATE_ACHIVE_SUCCESS:
      return {
        ...state,
        allData: [...state.allData, action.payload]
      };
    default:
      return state;
  }
};
