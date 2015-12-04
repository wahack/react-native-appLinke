var React = require('react-native');
var  styles = require('../../styles/login/style.js')
var {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AlertIOS
} = React;
var moment = require('moment');
var FluxMixin = require('../../mixins/flux-mixin');
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;
var PrimaryBtn = require('../../components/button/primary');
var PhoneInput = require('../../components/input/phone');
var PwdInput = require('../../components/input/password');
var dismissKeyboard = require('dismissKeyboard')
// var Flash = require('../../components/modal/flash');
// var Example =  require('../index/example');
// console.log(width, height);
module.exports = React.createClass({
  displayName: 'login',
  mixins:[FluxMixin,StoreWatchMixin('MeStore')],
  // getStateFromFlux:function () {
  //   return {
  //     tip: this.getFlux().store('ApplicationStore').getTip(),
  //   };
  // },
  getInitialState: function () {
    return {
      phone: {isValid: false, value: ''},
      pwd: {isValid: false, value:''}
    };
  },
  getStateFromFlux: function () {
    return {
      loginStatus: this.getFlux().store('MeStore').getLoginStatus()
    };
  },
  componentDidMount: function () {
    // this.getFlux().actions.application.setNavbar({
    //   title: '登录'
    // });
  },
  componentDidUpdate: function () {
    if (this.state.loginStatus.desc === 'success'&&!this.hasToSuccess) {
      this.toIndex();
      this.hasToSuccess = true;
    }
  },
  toSignup: function (e) {
    this.props.navigator.push({
      component: require('../signup'),
      index: 3,
      title: '注册'
    });
  },
  toIndex: function () {
    this.props.navigator.push({
      name: '我的主页',
      index: 1
    });
  },
  toLogin: function () {
    // console.log('login');
    // this.getFlux().actions.me.login({
    //   phone: this.state.phone.value,
    //   pwd: this.state.pwd.value
    // });
    if (!this.isFormValid()){
      return AlertIOS.alert('请检查表单');
    }
    this.getFlux().actions.application.setTopView('index');
  },

  setPhoneState: function (isValid, value) {
    this.setState({
      phone: {isValid: isValid, value: value}
    });
    // fetch("http://127.0.0.1:8000/Account/CheckPhone",
    //   {
    //     "method": "post",
    //     "body": JSON.stringify({phone: "13544193956"})
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //       AlertIOS.alert(
    //           "POST Response",
    //           "Response Body -> " + JSON.stringify(responseData.body)
    //       );
    //   })
    //   .done();
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
  dismissKeyboard:function (e) {
    dismissKeyboard();
  },
  render: function() {
    return (
      <View style={styles.container} onStartShouldSetResponder={this.dismissKeyboard} ref="container">
        <View style={styles.form}>
          <PhoneInput onChangeText={this.setPhoneState} />
          <PwdInput onChangeText={this.setPwdState}/>
          <PrimaryBtn onPress={this.toLogin} style={styles.btn} text="登录" status={this.isFormValid()?'active':'disabled'}/>
          <TouchableOpacity onPress={this.toSignup}>
            <Text style={styles.toSignup}>新用户 去注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});
