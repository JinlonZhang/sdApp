import { combineReducers } from 'redux';
import navReducer from './navReducer';
import tabReducer from './tabReducer';
import navBarReducer from './navBarReducer';

const rootReducer = combineReducers({
  navReducer,
  tabReducer,
  navBarReducer,
});

export default rootReducer;
