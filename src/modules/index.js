import { FETCH_PICTURES } from './unsplash/constants';

const initialState = {
  pictures: [],
  selection: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      return { ...state, pictures: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
