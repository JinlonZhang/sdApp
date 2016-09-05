import * as types from './types';

export function fetchSchedule(empid, schDate) {
  return dispatch => {
      dispatch({type: types.REQUEST_SCHEDULE});
      fetch(`https://apex.oracle.com/pls/apex/jred/sdapp/schedule/${empid}/${schDate}`)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        dispatch({type: types.RECEIVE_SCHEDULE, schedule_data: {schedule: response.items, schDate: schDate}});
      });
  };
};
