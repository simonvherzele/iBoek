import { combineReducers } from 'redux';

import unsplashReducer from './unsplash/reducer';
import likeReducer from './likes/reducer';

const rootReducer = combineReducers({
  unsplash: unsplashReducer,
  like: likeReducer,
});
export default rootReducer;
