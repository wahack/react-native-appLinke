'user strict';
var React = require('react-native');
// var Router = require('react-native-router');
const { View, Text, TabBarIOS} = React;

const styles =  require('../styles/app');
var Topbar = require('../components/topbar');
var Footer = require('../components/footer');
var Sidebar = require('../components/sidebar');
var Flash = require('../components/modal/flash');
var Index = require('./index');
var Login = require('./login');
var Signup = require('./signup');
var Order = require('./order');
var App = React.createClass({

  render() {
    return <View style={styles.application}>
      <View style={styles.main}>
        {this.props.children}
        <Flash />
      </View>
    </View>
  }
});
// <App navigator={navigator}><Index navigator={navigator} /></App>
module.exports = React.createClass({
  _renderScene: function (route) {
    switch (route.index) {
      case 1:
        return <App ><Index  navigator={this.props.navigator} /></App>
      case 2:
        return <App ><Login  navigator={this.props.navigator} /></App>
      case 3:
        return <App ><Signup navigator={this.props.navigator}  /></App>
      case 4:
        return <App ><Order  navigator={this.props.navigator} /></App>
      default:
        return <Index />
    }
  },
  render() {
    return (
      <App >
        {this._renderScene(this.props.route||{index:1})}
      </App>
    )
  }
});
