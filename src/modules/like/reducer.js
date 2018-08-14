import { SET_LIKES } from './constants';

const initialState = {
  likes: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKES:
      return { ...state, likes: [state.likes, action.payload] };
    default:
      return state;
  }
};
export default likeReducer;
