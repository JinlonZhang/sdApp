'use strict'
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Colors from '../../styles/colors';

const ArrowPrev = ({prev}) => (
    <TouchableOpacity onPress={prev}>
      <Icon name='ios-arrow-dropleft' size={30} color={Colors.brandPrimary} />
    </TouchableOpacity>
)

const ArrowNext = ({next}) => (
    <TouchableOpacity onPress={next}>
      <Icon name='ios-arrow-dropright' size={30} color={Colors.brandPrimary} />
    </TouchableOpacity>
)

export default class extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <ArrowPrev {...this.props} />
          <View style={{width: 200}}>
            <Text style={styles.dateText}>{this.props.text}</Text>
          </View>
          <ArrowNext {...this.props} />
        </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 30,
  },
  dateText: {
    textAlign: 'center',
    fontSize: 18,
  }
})
