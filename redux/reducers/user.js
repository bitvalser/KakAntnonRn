import { UserAction } from '../actions/user';

const initialState = {
  data: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case UserAction.UPDATE_USER:
        return {
            ...state,
            data: action.payload
        }
    default:
      return state;
  }
};
