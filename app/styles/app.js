var React = require('react-native');
var {
  StyleSheet
} = React;
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
module.exports = StyleSheet.create({
  application: {
    flex:1
  },
  main: {
    flex: 1,
  }
});
