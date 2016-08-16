import { connect } from 'react-redux';
import { push, pop } from '../actions/navActions';
import React from 'react';
import { NavigationExperimental } from 'react-native';
import Home from '../components/Home';
import About from '../components/About';
const { NavigationCardStack } = NavigationExperimental;

const mapStateToProps = (state) => {
  return {
    navigation: state.navReducer
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop())
  }
}

class NavRootContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderScene = (props) => {
    const { route } = props.scene;
    if (route.key === 'home') {
     return <Home _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'about') {
     return <About _goBack={this._handleBackAction.bind(this)} />
    }
  }

  _handleBackAction = () => {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute()
    return true;
  }

  _handleNavigate = (action) => {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route);
        return true;
      case 'back':
      case 'pop':
        return this._handleBackAction();
      default:
        return false;
    }
  }

  render() {
    return (
      <NavigationCardStack
        direction='vertical'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate}
        renderScene={this._renderScene}
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavRootContainer);
