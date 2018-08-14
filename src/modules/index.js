import { combineReducers } from 'redux';

import unsplashReducer from './unsplash/reducer';
import likeReducer from './like/reducer';

const rootReducer = combineReducers({
  unsplash: unsplashReducer,
  like: likeReducer,
});
export default rootReducer;
