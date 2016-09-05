import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { scheduleStyles as styles } from '../../styles';

import ShiftCalendarNavigator from './ShiftCalendarNavigator';
import ShiftCalendarBody from './ShiftCalendarBody';

class ShiftCalendar extends Component {
  render() {
    const { prev, next, schedule, isFetching } = this.props;
    return (
      <View style={styles.calendarContainer}>
        <ShiftCalendarNavigator text={this.props.text} prev={prev} next={next} />
        <ShiftCalendarBody schedule={schedule} isFetching={isFetching}/>
      </View>
    )
  }
};

export default ShiftCalendar;
