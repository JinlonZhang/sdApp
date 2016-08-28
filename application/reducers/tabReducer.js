import { CHANGE_TAB } from '../actions/types';

const homeIcon = {
  scale: 2.3,
}

const sampleIcon = {
  scale: 2.3,
}

const recipeIcon = {
  scale: 2.3,
}


const tabs = [
  { key: 'schedule', icon: 'ios-calendar', title: 'Schedule' },
  { key: 'exchanges', icon: 'ios-swap', title: 'Exchanges' },
  { key: 'profiles', icon: 'ios-person', title: 'Profile' }
]

const initialState = {
  index: 0,
  tabs,
}

function tabsNav(state = initialState, action) {
  if (action.index == state.index) return state;
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        index: action.index
      };
    default:
      return state;
  }
}

export default tabsNav;
