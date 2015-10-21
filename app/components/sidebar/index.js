var React = require('react-native');
const {View, Text, Image,TouchableHighlight} = React;
const styles = require('./style');

module.exports = React.createClass({
  toLogin: function () {
    this.props.navigator.push({
      index: 2,
      name: '登陆'
    });
  },
  toIndex: function () {
    this.props.navigator.push({
      index: 1,
      name: '主页'
    });
  },
  render() {
    return <View style={styles.container}>
      <TouchableHighlight onPress={this.toIndex} activeOpacity={0.5} style={styles.touchable} underlayColor="#e3e3e3">
        <Text>主页</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.toLogin} activeOpacity={0.5} style={styles.touchable} underlayColor="#e3e3e3">
        <Text>登录</Text>
      </TouchableHighlight>
    </View>
  }
});
