import Api from 'utils/Api';
import { FETCH_PICTURES } from './constants';

export function fetchPictures(selection) {
  return async dispatch => {
    console.log(selection);
    if (selection === 'default') {
      try {
        const response = await Api.get('/collections/973957/photos');
        dispatch({ type: FETCH_PICTURES, payload: response });
      } catch (err) {
        console.log('tis kapot');
      }
    } else if (selection === 'foodies') {
      try {
        const response = await Api.get('/collections/160213/photos');
        dispatch({ type: FETCH_PICTURES, payload: response });
      } catch (err) {
        console.log('tis kapot');
      }
    } else if (selection === 'architectuur') {
      try {
        const response = await Api.get('/collections/2148809/photos');
        dispatch({ type: FETCH_PICTURES, payload: response });
      } catch (err) {
        console.log('tis kapot');
      }
    } else if (selection === 'peeps') {
      try {
        const response = await Api.get('/collections/302501/photos');
        dispatch({ type: FETCH_PICTURES, payload: response });
      } catch (err) {
        console.log('tis kapot');
      }
    } else if (selection === 'kunst') {
      try {
        const response = await Api.get('/collections/195845/photos');
        dispatch({ type: FETCH_PICTURES, payload: response });
      } catch (err) {
        console.log('tis kapot');
      }
    } else if (selection === 'natuur') {
      try {
        const response = await Api.get('/collections/319663/photos');
        dispatch({ type: FETCH_PICTURES, payload: response });
      } catch (err) {
        console.log('tis kapot');
      }
    }
  };
}
