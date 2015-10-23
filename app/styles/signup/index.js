var React = require('react-native');
var _ = require('lodash');
var {
  StyleSheet
} = React;
var Dimensions = require('Dimensions');

var {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    flex: 1
  },
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 80,
  },
  toLogin: {
    color: '#f97f5f',
    alignSelf: 'center',
  },
  btn: {
    marginTop: 80,
    marginBottom: 100,
    borderRadius: 6,
    width: 280
  }
});
