import { connect } from 'react-redux';
import { fetchSchedule } from '../actions/scheduleActions';
import Schedule from '../components/Schedule';


const mapStateToProps = (state) => {
  return {
    schedule: state.schedule.schedule,
    isFetching: state.schedule.isFetching,
    schDate: state.schedule.schDate,
    // userId: state.signin.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchedule: (empId, schDate) => {dispatch(fetchSchedule(empId, schDate))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
