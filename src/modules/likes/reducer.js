import { SET_LIKES, GET_LIKES } from './constants';

const initialState = {
  likes: [],
  liked: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKES:
      return { ...state, likes: [...state.likes, action.payload] };
    case GET_LIKES:
      return { ...state, liked: [...state.liked, action.payload] };
    default:
      return state;
  }
};
export default likeReducer;
