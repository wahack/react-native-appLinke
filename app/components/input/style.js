var React = require('react-native');
var {
  StyleSheet
} = React;
module.exports = StyleSheet.create({
  inputWrap: {

  },
  iconWrap: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  icon: {
    width: 16,
    height: 16
  },
  inputPanel:{
    width: 280,
    height: 44,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eaebed',
  },
  label:{
    flex: 2,
    textAlign: 'center',
    fontSize: 14 
  },
  input: {
    flex: 5,
    fontSize: 14,
    marginRight: 2
  }
});
