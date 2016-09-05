import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Item from './ShiftCalendarItem';
import { scheduleStyles as styles } from '../../styles';
import Colors from '../../styles/colors';
import Spinner from 'react-native-spinkit';

class ShiftCalendarBody extends Component {
  render() {
    const { isFetching } = this.props;
    const Items = this.props.schedule.map((day) => {
    return <Item
              key={day.day_nr}
              dayName={day.day_name}
              dayNr={day.day_nr}
              shift={day.shift_id}
           />
    });
    if (isFetching)
      return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
          <Spinner isVisible={true} size={200} type={'Arc'} color={Colors.brandPrimary} />
        </View>
      )
    return (
      <View style={styles.calendarBody}>
        { Items }
      </View>
    )
  }
}

export default ShiftCalendarBody;
