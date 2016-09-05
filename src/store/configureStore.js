import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  const store = createStoreWithMiddleware(rootReducer, {});
  return store;
}
