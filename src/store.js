import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import qhistory from 'qhistory';
import { stringify, parse } from 'qs';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules';

export const history = qhistory(createHistory(), stringify, parse);

const persistConfig = {
  key: 'root',
  blacklist: ['core', 'intro', 'form'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const enhancers = [];
const middleware = [thunk, promise, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  middleware.push(logger);
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);
export const store = createStore(persistedReducer, initialState, composedEnhancers);
export const persistor = persistStore(store);
