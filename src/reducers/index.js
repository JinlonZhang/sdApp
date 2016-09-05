import { combineReducers } from 'redux';
import navReducer from './navReducer';
import tabReducer from './tabReducer';
import navBarReducer from './navBarReducer';
import schedule from './scheduleReducer';

const rootReducer = combineReducers({
  navReducer,
  tabReducer,
  navBarReducer,
  schedule,
});

export default rootReducer;
