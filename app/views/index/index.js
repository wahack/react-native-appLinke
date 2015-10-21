const React = require('react-native');
const  styles = require('../../styles/index/style.js')
const {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ListView
} = React;
const moment = require('moment');
const FluxMixin = require('../../mixins/flux-mixin');
const StoreWatchMixin = require('fluxxor').StoreWatchMixin;
const OrderPanel = require('../../components/panel/order');

module.exports = React.createClass({
  mixins:[FluxMixin,StoreWatchMixin('OrderStore')],
  getStateFromFlux:function () {
    const orderStore = this.getFlux().store('OrderStore');
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
    return {
      orders: ds.cloneWithRows(orderStore.getRecommendList()),
      hasFetch: orderStore.hasFetchRecommend()
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
    console.log(this.props);
    this.props.navigator.push({
      component: require('../route'),
      index: 2,
      title: '登录'
    });
  },
  _renderRow: function (order: Object, sectionID: number|string, rowID: number|string) {
    return <OrderPanel navigator={this.props.navigator} id={order.get('id')} />
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
           <Image source={require('../../images/index/banner-bg.jpg')} style={styles.bgImage}>
              <TouchableOpacity style={styles.touchableOpacity} onPress={this.toLogin}>
                <Image source={require('../../images/index/to-recomm.png')} style={styles.toRecomm} />
              </TouchableOpacity>
              <TouchableHighlight>
                <View style={styles.shadow}>
                  <View style={styles.balance}>
                    <Text style={styles.text}>可提现余额</Text>
                    <Text style={styles.text}>732500元</Text>
                  </View>
                  <View style={styles.toWithdraw}>
                    <Image source={require('../../images/icon/arrow-right-white.png')} style={styles.arrow}/>
                  </View>
                </View>

              </TouchableHighlight>
           </Image>
        </View>
        <View style={styles.list}>
          <ListView
            dataSource={this.state.orders}
            renderRow={this._renderRow}
          />
        </View>
      </View>
    );
  }
});
