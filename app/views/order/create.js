const React = require('react-native');
// const  styles = require('../../styles/order/style.js')
const {
  Text,
  View,
  Image,
  ListView,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  AlertIOS
} = React;
const FluxMixin = require('../../mixins/flux-mixin');
const StoreWatchMixin = require('fluxxor').StoreWatchMixin;
const Input = require('../../components/input/default');
const PrimaryBtn = require('../../components/button/primary');
const styles = require('../../styles/order/style');
const DEFAULT_CITY = require('../../constant/city').DEFAULT_CITY;
const _ = require('lodash');
const util = require('../../utils/functions');

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('CityStore','OrderStore')],
  getStateFromFlux: function () {
    return {
      city: this.getFlux().store('CityStore').getChoosenCity(),
      orderStatus: this.getFlux().store('OrderStore').getCreateRecommendStatus()
    };
  },
  getInitialState: function () {
    return {
      name: '',
      phone: ''
    };
  },
  isFormValid: function () {
    if (this.state.phone.length >=11 && this.state.name) {
      return true;
    }
    return false;
  },
  componentDidUpdate: function () {
    if (this.state.orderStatus.desc === 'success') {
      AlertIOS.alert('提交订单成功','',[{
        text:'查看订单',onPress:()=> this.getFlux().actions.application.setHomeTab('order')
      }]);
    }
  },
  createOrder: function () {
    var phoneVerify = util.isMobile(this.state.phone);
    var nameVerify = util.isName(this.state.name);
    if (!phoneVerify.isValid) {
      return AlertIOS.alert('填写错误',phoneVerify.msg);
    }
    if (!nameVerify.isValid) {
      return AlertIOS.alert('填写错误',nameVerify.msg);
    }
    this.getFlux().actions.order.createRecommendOrder({
      city: _.isEmpty(this.state.city)? DEFAULT_CITY : this.state.city,
      name: this.state.name,
      phone: this.state.phone
    });
  },
  toCity: function () {
    this.props.navigator.push({
      component: require('../city/province'),
      title: '选择省份'
    });
  },
  onChangePhone: function (text) {
    this.setState({phone: text});
  },
  onChangeName: function (text) {
    this.setState({name: text});
  },
  onPhoneBlur: function () {
    console.log('blur');
  },
  render: function () {
    var city = _.isEmpty(this.state.city)? DEFAULT_CITY : this.state.city;
    return <View style={styles.createOrderContainer}>
    <Input label="手机号码" placeholder="客户手机号码" onBlur={this.onPhoneBlur}
      onChangeText={this.onChangePhone}  keyboardType="numeric"/>
    <Input label="客户姓名" placeholder="客户姓名" onChangeText={this.onChangeName} />
    <TouchableHighlight style={styles.chooseCityTouchable} onPress={this.toCity}>
      <View style={styles.chooseCity}>
        <Text style={styles.desc}>办理城市</Text>
        <Text style={styles.city}>{city.name} <Image source={require('image!arrow-right')}/></Text>
      </View>
    </TouchableHighlight>
    <PrimaryBtn onPress={this.createOrder} style={styles.btn} text="我要交单" status={this.isFormValid()?'active':'disabled'}/>
    </View>
  }
});
