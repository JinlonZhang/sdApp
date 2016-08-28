import { POP_ROUTE, PUSH_ROUTE, CHANGE_TAB } from '../actions/types';

const initialState = {
  navName: 'tabs'
}

function navBarState(state=initialState, action) {
  switch (action.type) {

    case PUSH_ROUTE:
      return {navName: 'routes'}
    case POP_ROUTE:
      return {navName: 'routes'};
    case CHANGE_TAB:
      return {navName: 'tabs'};
    default:
      return state;
  }
}

export default navBarState;
