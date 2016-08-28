import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import TabsRootContainer from './tabsRootContainer';
import Colors from '../styles/colors';

function mapStateToProps(state) {
  return {
    tabs: state.tabReducer,
    routes: state.navReducer,
    navBar: state.navBarReducer,
  }
}

class App extends Component {

  getNavBarTitle = () => {
    let { navBar, routes, tabs } = this.props;
    switch(navBar.navName) {
      case 'routes':
        return routes.routes[routes.index].title;
      case 'tabs':
        return tabs.tabs[tabs.index].title;
    }
  }

  render() {
    let title = {title: this.getNavBarTitle(), tintColor: 'white'};
    return (
      <View style={{flex: 1}}>
        <NavigationBar title={title} tintColor={Colors.brandPrimary}/>
        <TabsRootContainer />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App);
