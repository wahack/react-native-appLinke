var React = require('react-native');
var {
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  View,
  Modal,
  StyleSheet
} = React;
var styles = require('./style');
var {isPwdValid, trimAll} = require('../../utils/functions');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      pwd: ''
    };
  },
  getIcon: function () {
    if (!this.state.pwd) return null;
    return <TouchableOpacity style={styles.iconWrap} onPress={this.clear}>
      <Image style={styles.icon} source={require('image!cha')} />
    </TouchableOpacity>
  },
  clear: function () {
    this.setState({pwd:''});
  },
  _onChangeText: function (text) {
    this.setState({pwd: text});
    if (isPwdValid(text).isValid){
      this.props.onChangeText(true, trimAll(text));
    } else {
      this.props.onChangeText(false, trimAll(text));
    }
  },
  render: function () {
    return <View style={[styles.inputPanel,pwdStyles.pwd]}>
    <Text style={styles.label}>登录密码</Text>
    <TextInput
        style={styles.input}
        onChangeText={this._onChangeText}
        value={this.state.pwd}
        placeholder='请输入8-18位密码'
        secureTextEntry={true}
        returnKeyType='go'
        maxLength={20}
    />
    {this.getIcon()}
    </View>
  }
});

var pwdStyles = StyleSheet.create({
  pwd: {
    width: 280
  }
});
