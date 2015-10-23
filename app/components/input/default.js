var React = require('react-native');
var {
  Text,
  TextInput,
  View
} = React;
var styles=require('./style');
module.exports = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    };
  },
  onChangeText: function (text) {
    this.setState({value:text});
    (this.props.onChangeText||function(){})(text);
  },
  render: function () {
    var props = this.props;
    return <View style={styles.inputPanel}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input}
        clearButtonMode={props.clearButtonMode||'while-editing'}
        value={this.state.value}
        onChangeText={this.onChangeText}
        onBlur={()=>(props.onBlur||function(){})()}
        returnKeyType={props.returnKeyType||'default'}
        keyboardType={props.keyboardType||'default'}
        placeholder={props.placeholder} />
    </View>
  }
})
