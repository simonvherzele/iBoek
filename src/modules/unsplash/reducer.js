import { SET_PICTURES } from './constants';

const initialState = {
  pictures: [],
  limit: 2,
};

const unsplashReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PICTURES:
      return { ...state, pictures: action.payload };
    default:
      return state;
  }
};
export default unsplashReducer;
