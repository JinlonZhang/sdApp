import { POP_ROUTE, PUSH_ROUTE } from '../actions/types';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
    key: 'exchanges',
    title: 'Exchanges',
  }]
}

function navigationState(state=initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) // why action.route is used?
        return state;
      return NavigationStateUtils.push(state, action.route);
    case POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) // why not only length to check?
        return state;
      return NavigationStateUtils.pop(state);
    default:
      return state;
  }
}
export default navigationState;
