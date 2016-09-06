import React, { Component } from 'react';
import { View } from 'react-native';
import TabsRootContainer from './tabsRootContainer';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TabsRootContainer />
      </View>
    )
  }
}

export default App;
