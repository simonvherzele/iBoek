import { SET_LIKES, GET_LIKES } from './constants';

export function like(imageId) {
  return dispatch => {
    const photoId = imageId;
    dispatch({ type: SET_LIKES, payload: photoId });
  };
}

export function liked(likes) {
  return dispatch => {
    const testje = 'test ok';
    console.log(testje);
    dispatch({ type: GET_LIKES, payload: testje });
  };
}
