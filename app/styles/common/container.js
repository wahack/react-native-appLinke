var Dimensions = require('Dimensions');

var {width, height} = Dimensions.get('window');

module.exports = {
  backgroundColor: '#f7f7f7',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexDirection: 'row',
  width: width,
  flex: 1
};
