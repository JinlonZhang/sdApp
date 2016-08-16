import { PUSH_ROUTE, POP_ROUTE } from './types';

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
