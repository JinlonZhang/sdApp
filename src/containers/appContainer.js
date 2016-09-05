import { connect } from 'react-redux';
import React, { Component } from 'react';
import { push, pop } from '../actions/navActions';
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

const mapDispatchToProps = (dispatch) => {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop())
  }
}

class App extends Component {

  getTitle = () => {
    let { navBar, routes, tabs } = this.props;
    switch(navBar.navName) {
      case 'routes':
        return routes.routes[routes.index].title;
      case 'tabs':
        return tabs.tabs[tabs.index].title;
    }
  }

  getRightButton = () => {
    switch(this.getTitle()) {
      case 'Exchanges':
        return {
          title: 'Create',
          tintColor: 'white',
          handler: () => this.props.pushRoute({key: 'exchangerequest', title: 'New Exchange Request'}),
        };
      default:
        return {
          title: ''
        }
    }
  }

  render() {
    const title = this.getTitle();
    const titleConfig = {title: title, tintColor: 'white'};
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
          rightButton={this.getRightButton()}
        />
        <TabsRootContainer />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
