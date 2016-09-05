import * as types from '../actions/types';
import moment from 'moment';

const initialState = {
  schedule: [],
  schDate: moment().subtract(1, 'M').format('MMYY'),
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case types.REQUEST_SCHEDULE:
    return Object.assign({}, state, { isFetching: true });
  case types.RECEIVE_SCHEDULE:
    return Object.assign({}, state, {
      schedule: [...action.schedule_data.schedule],
      schDate: action.schedule_data.schDate,
      isFetching: false,
    });
  default:
    return state;
  }
};
