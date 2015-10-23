'user strict';
var React = require('react-native');
// var Router = require('react-native-router');
const { View, Text, TabBarIOS} = React;

// var Topbar = require('../components/topbar');
// var Footer = require('../components/footer');
// var Sidebar = require('../components/sidebar');
// var Flash = require('../components/modal/flash');
var Index = require('./index');
var Login = require('./login');
var Signup = require('./signup');
var Order = require('./order/list');
var App = React.createClass({

  render() {
    return <View style={styles.application}>
      <View style={styles.main}>
        {this.props.children}
      </View>
    </View>
  }
});



module.exports = React.createClass({
  _renderScene: function (route, navigator) {
    console.log(route);
    switch (route.name) {
      case 'index':
        return <App ><Index  navigator={navigator} /></App>
      case 'login':
        return <App ><Login  navigator={navigator} /></App>
      case 'signup':
        return <App ><Signup navigator={navigator}  /></App>
      case 'order':
        return <App ><Order  navigator={navigator} /></App>
      default:
        return <App ><Index  navigator={navigator} /></App>
    }
  },
  render() {
    return (
      <App >
        {this._renderScene(this.props.route, this.props.navigator)}
      </App>
    )
  }
});
