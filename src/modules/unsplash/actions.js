import Api from 'utils/Api';
import { SET_PICTURES } from './constants';

export function fetchPictures(collectionId) {
  return async dispatch => {
    try {
      const response = await Api.get(`/collections/${collectionId}/photos`);

      if (response.status === 200) {
        dispatch({ type: SET_PICTURES, payload: response.data });
      } else {
        // errors
      }
    } catch (err) {
      // api call is mislukt
      // Netwerkfout
    }
  };
}
