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
      const array = state.likes;
      const index = array.indexOf(action.payload);
      array.splice(index, 1);
      console.log(array);
      return { likes: array };
    }

    default:
      return state;
  }
};
export default likeReducer;
