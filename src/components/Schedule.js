import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ShiftCalendar from './schedule/ShiftCalendar';
import moment from 'moment';

class Schedule extends Component {
  componentDidMount() {
    const { fetchSchedule, schDate } = this.props;
    fetchSchedule(1, schDate);
  }

  _next = () => {
    const { fetchSchedule, schDate, userId } = this.props;
    const nextMonth = moment(schDate, 'MMYY').add(1, 'M').format('MMYY');
    fetchSchedule(1, nextMonth);
  }

  _prev = () => {
    const { fetchSchedule, schDate, userId } = this.props;
    const prevMonth = moment(schDate, 'MMYY').subtract(1, 'M').format('MMYY');
    fetchSchedule(1, prevMonth);
  }

  render() {
    const { fetchSchedule, schDate, userId, schedule, isFetching } = this.props;
    return (
      <ShiftCalendar
        schedule={schedule}
        text={moment(schDate, 'MMYY').format('MMMM YYYY')}
        prev={this._prev}
        next={this._next}
        isFetching={isFetching}
      />
    )
  }
};

export default Schedule;
