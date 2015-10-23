const React = require('react-native');
const  styles = require('../../styles/index/style.js')
const {
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} = React;
const FluxMixin = require('../../mixins/flux-mixin');

const StoreWatchMixin = require('fluxxor').StoreWatchMixin;

const Order = require('../order/list');
const Login = require('../login');
const OrderCreate = require('../order/create');

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('ApplicationStore')],
  displayName: 'IndexView',
  getStateFromFlux: function () {
    return {
      selectedTab: this.getFlux().store('ApplicationStore').getHomeTabName()
    };
  },
  // getInitialState: function () {
  //   return {
  //     selectedTab: 'order'
  //   };
  // },

  componentDidMount: function () {
    // this.getFlux().actions.application.setNavbar({
    //   title: '我的主页'
    // });
  },
  setTabName: function (name) {
    this.getFlux().actions.application.setHomeTab(name);
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="white" barTintColor="＃333">
        <TabBarIOS.Item title="我的订单" selected={this.state.selectedTab === 'order'}
        icon={{uri: base64Icon, scale: 3}}
        onPress={() => {
          this.setTabName('order');
          // this.setState({
          //   selectedTab: 'order'
          // });
          // this.props.navigator.push({name:'order',title:'我的订单',component:require('../route')});
        }}>
        <NavigatorIOS ref="nav" style={{flex:1,marginTop: 20}} initialRoute={{
          component: Order,
          title: '我的订单',
          name: 'order'
        }} itemWrapperStyle={{}}  navigationBarHidden={false} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="我要交单" selected={this.state.selectedTab === 'orderCreate'}
        icon={{uri: base64Icon, scale: 3}}
        onPress={() => {
          this.setTabName('orderCreate');
          // this.setState({
          //   selectedTab: 'orderCreate'
          // });
          // this.props.navigator.push({name:'login',title:'我要登录',component:require('../route')});
        }}>
        <NavigatorIOS ref="nav" style={{flex:1,marginTop: 20}} initialRoute={{
          component: require('../order/create'),
          title: '我要交单',
          name: 'orderCreate'
        }} itemWrapperStyle={{}}  navigationBarHidden={false} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="我要提现" selected={this.state.selectedTab === 'withdraw'}
        icon={{uri: base64Icon, scale: 3}}
        onPress={() => {
          this.setTabName('withdraw');
          // this.setState({
          //   selectedTab: 'withdraw'
          // });
        }}>
        <NavigatorIOS ref="nav" style={{flex:1,marginTop: 20}} initialRoute={{
          component: Order,
          title: '登录',
          name: 'login'
        }} itemWrapperStyle={{}}  navigationBarHidden={false} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title="我的帐户" selected={this.state.selectedTab === 'me'}
        icon={{uri: base64Icon, scale: 3}}
        onPress={() => {
          this.setTabName('me');
        }}>
        <NavigatorIOS ref="nav" style={{flex:1,marginTop: 20}} initialRoute={{
          component: Order,
          title: '登录',
          name: 'login'
        }} itemWrapperStyle={{}}  navigationBarHidden={false} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});
