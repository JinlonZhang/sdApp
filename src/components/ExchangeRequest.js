import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';
import Colors from '../styles/colors';

class Exchanges extends Component {

  getRightButton = () => {
    const { _handleNavigate: navigate } = this.props;
    return {
      title: 'Next',
      tintColor: 'white',
      handler: () => navigate({type: 'push', route: {key: 'exchangerequest', title: 'New Exchange Request'}}),
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          title={{title: 'New Request', tintColor: 'white'}}
          tintColor={Colors.brandPrimary}
          rightButton={this.getRightButton()}
        />
      </View>
    )
  }
};

export default Exchanges;
