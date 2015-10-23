const React = require('react-native');
const  styles = require('../../styles/index/style.js')
const {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  SegmentedControlIOS
} = React;
const moment = require('moment');
const FluxMixin = require('../../mixins/flux-mixin');
const StoreWatchMixin = require('fluxxor').StoreWatchMixin;
const OrderPanel = require('../../components/panel/order');
const _ = require('lodash');
const CONSTANT = require('../../constant/order');

module.exports = React.createClass({
  displayName: 'OrderList',
  mixins:[FluxMixin,StoreWatchMixin('OrderStore')],
  getStateFromFlux:function () {
    const orderStore = this.getFlux().store('OrderStore');
    return {
      orders: orderStore.getRecommendList(),
      hasFetch: orderStore.hasFetchRecommend()
    };
  },
  getInitialState: function () {
    return {
      segmentValue: '全部'
    };
  },
  componentWillMount() {
    if(!this.state.hasFetch) {
      this.getFlux().actions.order.getRecommendList();
    }
  },
  componentDidMount: function () {
    // this.getFlux().actions.application.setNavbar({
    //   title: '我的主页'
    // });
  },
  toLogin: function () {
    this.props.navigator.push({
      component: require('../login'),
      name: 'login',
      title: '登录'
    });
  },
  _dataSource: function () {
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
    var orders = this.state.orders;
    if (this.state.segmentValue === '进行中'){
      orders = orders.filter(function(order){
        return _.includes([CONSTANT.ORDER_APPLY,CONSTANT.ORDER_FOLLOW],order.get('status').code);
      });
    }
    return ds.cloneWithRows(orders);
  },
  _renderRow: function (order: Object, sectionID: number|string, rowID: number|string) {
    return <OrderPanel navigator={this.props.navigator} id={order.get('id')} />
  },
  onValueChange: function (value) {
    console.log(value);
  },
  _renderSectionHeader: function () {
    return <View style={{backgroundColor:'#e3e3e3',marginTop:20,marginBottom:20}}>
        <SegmentedControlIOS values={['全部','进行中']} selectedIndex={0} style={{width: 240,alignSelf:'center'}}
          onValueChange={(value)=>this.setState({segmentValue:value})}
        />
      </View>

  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>

          <ListView
            dataSource={this._dataSource()}
            renderRow={this._renderRow}
            renderHeader={this._renderSectionHeader}
            pageSize={4}
          />
        </View>
      </View>
    );
  }
});
// <View style={styles.banner}>
//    <Image source={require('../../images/index/banner-bg.jpg')} style={styles.bgImage}>
//       <TouchableOpacity style={styles.touchableOpacity} onPress={this.toLogin}>
//         <Image source={require('../../images/index/to-recomm.png')} style={styles.toRecomm} />
//       </TouchableOpacity>
//       <TouchableHighlight>
//         <View style={styles.shadow}>
//           <View style={styles.balance}>
//             <Text style={styles.text}>可提现余额</Text>
//             <Text style={styles.text}>732500元</Text>
//           </View>
//           <View style={styles.toWithdraw}>
//             <Image source={require('../../images/icon/arrow-right-white.png')} style={styles.arrow}/>
//           </View>
//         </View>
//
//       </TouchableHighlight>
//    </Image>
// </View>
