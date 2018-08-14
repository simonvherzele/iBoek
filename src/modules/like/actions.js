import { SET_LIKES } from './constants';

export function addLike(image) {
  return dispatch => {
    console.log('da weirkt');
    console.log(image);
    dispatch({ type: SET_LIKES, payload: image });
  };
}
