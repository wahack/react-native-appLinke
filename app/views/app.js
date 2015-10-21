'user strict';
var React = require('react-native');
// var Router = require('react-native-router');
const {NavigatorIOS, View, Text, StyleSheet} = React;

// var Drawer = require('react-native-drawer')

// const styles =  require('../styles/app');
// var Topbar = require('../components/topbar');
// var Footer = require('../components/footer');
// var Sidebar = require('../components/sidebar');
// var Flash = require('../components/modal/flash');
// var Index = require('./index');
// var Login = require('./login');
// var Signup = require('./signup');
// var Order = require('./order');

//  var App = React.createClass({
//   componentDidMount: function () {
//     this.isDrawerOpen = false;
//   },
//   toggleMenu: function () {
//     if (this.isDrawerOpen) {
//       this.refs.drawer.close();
//     } else {
//       this.refs.drawer.open();
//     }
//   },
//   onOpen: function () {
//     this.isDrawerOpen = true;
//   },
//   onClose: function () {
//     this.isDrawerOpen = false;
//   },
//   render() {
//     return <View style={styles.application}>
//     <Drawer ref="drawer"
//       content={<Sidebar navigator={this.props.navigator}/>}
//       openDrawerOffset={100}
//       panCloseMask={1}
//       acceptTap={true}
//       onOpen={this.onOpen}
//       onClose={this.onClose}
//       styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}}
//       tweenHandler={Drawer.tweenPresets.parallax}
//       >
//       <View style={styles.topbar}>
//         <Topbar onPressMenu={this.toggleMenu}/>
//       </View>
//
//       <View style={styles.main}>
//         {this.props.children}
//         <Flash />
//       </View>
//       <View style={styles.footer}>
//         <Footer />
//       </View>
//       </Drawer>
//     </View>
//   }
// });
const Route = require('./route');
var Index = require('./index');
var styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20
  },
  emptyPage: {
    flex: 1,
    paddingTop: 164,
    backgroundColor: 'green'
  },
  text:{
    marginTop: 100
  }
});
var Test = React.createClass({
  componentDidMount: function () {
    console.log('sdfsdfsdf');
  },
  render: function () {
    return <View style={styles.emptyPage}>
    <Text style={styles.text}>sdfsfsdf</Text>
    </View>
  }
});

module.exports = React.createClass({
  _renderScene: function (route, navigator) {
    switch (route.index) {
      case 1:
        return <App navigator={navigator}><Index navigator={navigator} /></App>
      case 2:
        return <App navigator={navigator}><Login navigator={navigator} /></App>
      case 3:
        return <App navigator={navigator}><Signup navigator={navigator} /></App>
      case 4:
        return <App navigator={navigator}><Order navigator={navigator} /></App>
      default:
        return <Index navigator={navigator} />
    }
  },
  render() {
    return (
      <NavigatorIOS ref="nav" style={styles.container} initialRoute={{
        component: Route,
        title: '我的主页',
        passProps: {route: {index: 1}},
        leftButtonIcon: require('image!menu'),
        rightButtonIcon: require('image!arrow-left'),
        leftButtonTitle: '后退'
      }} itemWrapperStyle={{}}  navigationBarHidden={false} />
    )
  }
});
