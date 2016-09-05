import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

class Exchanges extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          title={{title: 'Exchanges', tintColor: 'white'}}
          tintColor={'red'}
        />
      </View>
    )
  }
};

export default Exchanges;
