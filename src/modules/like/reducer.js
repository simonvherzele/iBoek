import _ from 'lodash';
import { SET_LIKES } from './constants';

const initialState = {
  likes: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKES: {
      const likeId = state.likes.map(likes => likes.id);
      const status = _.includes(likeId, action.payload.id);
      if (status === false) {
        return { likes: [...state.likes, action.payload] };
      }
      return { likes: [...state.likes] };
    }

    default:
      return state;
  }
};
export default likeReducer;
