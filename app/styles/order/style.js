var React = require('react-native');
var _ = require('lodash');
var {
  StyleSheet
} = React;
var Dimensions = require('Dimensions');

var {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: _.assign({},{
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    flex: 1
  }),
  createOrderContainer: {
    paddingTop: 100,
    backgroundColor:'#f7f7f7',
    flexDirection:'column',
    alignItems:'center',
    flex:1
  },
  chooseCityTouchable:{
    borderRadius: 6,
    marginTop: 20,
    overflow: 'hidden'
  },
  chooseCity: {
    flexDirection: 'row',
    width: 280,
    height: 44,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  desc: {

  },
  city: {

  },

  btn: {
    marginTop: 40,
    marginBottom: 100,
    borderRadius: 6,
    width: 280
  }
});
