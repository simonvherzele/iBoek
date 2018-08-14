import { SET_LIKES } from './constants';
// add lodash

const initialState = {
  likes: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKES: {
      // logica
      // check if already exists -> lodash _.finc

      // if found remove else add

      return { ...state, likes: [...state.likes, action.payload] };
    }
    default:
      return state;
  }
};
export default likeReducer;
