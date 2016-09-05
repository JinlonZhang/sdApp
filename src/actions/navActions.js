import { PUSH_ROUTE, POP_ROUTE, CHANGE_TAB } from './types';

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop(route) {
  return {
    type: POP_ROUTE,
    route
  }
}

export function changeTab(index) {
  return {
    type: CHANGE_TAB,
    index
  }
}
