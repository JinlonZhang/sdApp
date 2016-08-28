import { connect } from 'react-redux';
import { changeTab } from '../actions/navActions';
import React, { Component } from 'react';
import { View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Profiles from '../components/Recipes';
import Exchanges from '../components/Samples';
import Schedule from '../containers/NavRootContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import Colors from '../styles/colors';

function mapStateToProps(state) {
  return {
    tabs: state.tabReducer,
    routes: state.navReducer,
    navBar: state.navBarReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: route => dispatch(changeTab(route))
  }
}

class Tabs extends Component {

  _changeTab(i) {
    const { changeTab } = this.props;
    changeTab(i);
  }

  _renderTabContent(key) {
    switch (key) {
      case 'schedule':
        return <Schedule />
      case 'exchanges':
        return <Exchanges />
      case 'profiles':
        return <Profiles />
    }
  }

  render() {
    const tabs = this.props.tabs.tabs.map((tab, i) => {
      return (
        <TabNavigator.Item
          key={tab.key}
          selected={this.props.tabs.index === i}
          title={this.props.tabs.tabs[i].title}
          titleStyle={{color: Colors.inactiveTab}}
          selectedTitleStyle={{color: Colors.activeTab}}
          renderIcon={() => <Icon name={this.props.tabs.tabs[i].icon} size={25} color={Colors.inactiveTab}/>}
          renderSelectedIcon={() => <Icon name={this.props.tabs.tabs[i].icon} size={25} color={Colors.activeTab} />}
          onPress={() => { this._changeTab(i) }}
        >
          {this._renderTabContent(tab.key)}
        </TabNavigator.Item>
      )
    });

    return (
      <TabNavigator tabBarStyle={{backgroundColor: Colors.brandPrimary}}>
        {tabs}
      </TabNavigator>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
