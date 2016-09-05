'use strict'
import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { scheduleStyles as styles } from '../../styles';

export default class extends React.Component {
  render() {
    return (
      <View style={styles.itemStyle}>
        <Text style={{fontSize: 12}}>{this.props.dayNr}</Text>
        <Text style={{fontSize: 12}}>{this.props.dayName}</Text>
      </View>
    )
  }
};
