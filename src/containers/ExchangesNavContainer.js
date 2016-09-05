import { connect } from 'react-redux';
import { push, pop } from '../actions/navActions';
import React from 'react';
import { NavigationExperimental } from 'react-native';
import Exchanges from '../components/Exchanges';
import ExchangeRequest from '../components/ExchangeRequest';
const {
  CardStack: NavigationCardStack
} = NavigationExperimental

const mapStateToProps = (state) => {
  return {
    navigation: state.navReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop())
  }
}

class ExchangesNavContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderScene = (props) => {
    const { route } = props.scene;
    if (route.key === 'exchanges') {
     return <Exchanges _handleNavigate={this._handleNavigate.bind(this)} />
    }
    if (route.key === 'exchangerequest') {
     return <ExchangeRequest _handleNavigate={this._handleNavigate.bind(this)} />
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
        direction='horizontal'
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate}
        renderScene={this._renderScene}
      />
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesNavContainer);
