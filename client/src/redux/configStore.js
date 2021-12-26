import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import moodsReducer from './reducers/moods';

const reducer = combineReducers({
  moodsReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, logger)),
);

export default store;
