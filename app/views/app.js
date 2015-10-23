'user strict';
var React = require('react-native');
// var Router = require('react-native-router');
const {NavigatorIOS, StyleSheet} = React;
const Index = require('./index');
const Login = require('./login');
// const Route = require('./route');
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     marginTop: 20
//   }
// });
const FluxMixin = require('../mixins/flux-mixin');

const StoreWatchMixin = require('fluxxor').StoreWatchMixin;

module.exports = React.createClass({
  mixins:[FluxMixin,StoreWatchMixin('ApplicationStore')],
  getStateFromFlux: function () {
    return {
      topView: this.getFlux().store('ApplicationStore').getTopView()
    };
  },
  render() {
    return this.state.topView === 'index' ? <Index /> :
    <NavigatorIOS ref="nav" style={{flex:1,marginTop: 20}} initialRoute={{
      component: Login,
      title: '登录',
      name: 'login'
    }} itemWrapperStyle={{}}  navigationBarHidden={false} />
  }
});
