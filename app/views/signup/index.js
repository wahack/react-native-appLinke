const React = require('react-native');
const  styles = require('../../styles/signup');
const {
  Text,
  View,
  TextInput,
  TouchableOpacity
} = React;
const FluxMixin = require('../../mixins/flux-mixin');
const StoreWatchMixin = require('fluxxor').StoreWatchMixin;
const PhoneInput = require('../../components/input/phone');
const PrimaryBtn = require('../../components/button/primary');
const PwdInput = require('../../components/input/password');

module.exports = React.createClass({
  mixins:[FluxMixin, StoreWatchMixin('ApplicationStore')],
  getStateFromFlux:function () {
    return {
      navbar: this.getFlux().store('ApplicationStore').getNavbar()
    };
  },
  getInitialState: function () {
    return {
      phone: {isValid: false, value: ''},
      pwd: {isValid: false, value:''}
    };
  },
  componentDidMount: function () {
    // this.getFlux().actions.application.setNavbar({
    //   title: '注册'
    // });
  },
  toHome: function () {
    console.log('to home');
    this.props.navigator.push({
      component: require('../route'),
      index: 1,
      title: '登录'
    });
  },
  setPhoneState: function (isValid, value) {
    this.setState({
      phone: {isValid: isValid, value: value}
    });
  },
  setPwdState: function (isValid, value) {
    this.setState({
      pwd: {isValid: isValid, value: value}
    });
  },
  isFormValid: function () {
    if (this.state.phone.isValid && this.state.pwd.isValid) return true;
    return false;
  },
  toLogin: function () {
    this.props.navigator.push({
      title: '登录',
      component: require('../login')
    });
  },
  toSignup: function () {

  },
  render: function() {
    return (
      <View style={styles.container}>
      <View style={styles.form}>
        <PhoneInput onChangeText={this.setPhoneState} checkPhoneType="shouldNew"/>
        <PwdInput onChangeText={this.setPwdState}/>
        <PrimaryBtn onPress={this.toSignup} style={styles.btn} text="注册" status={this.isFormValid()?'active':'disabled'}/>
        <TouchableOpacity onPress={this.toLogin}>
          <Text style={styles.toLogin}>已注册 去登录</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
});
