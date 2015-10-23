const React = require('react-native');
const {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} = React;

// const PickerItemIOS = PickerIOS.Item;
const DATA = require('./data');
const DEFAULT_CITY = {
  id: '02dd93c0-209d-11e5-94f5-02004c4f4f50',
  name: '广东省'
};
module.exports = React.createClass({
  getInitialState: function () {
    return {
      id: DEFAULT_CITY.id,
      name: DEFAULT_CITY.name
    };
  },
  onValueChange: function (value) {
    this.setState({
      id: value,
    });
  },
  toCities: function (id) {
    this.props.navigator.push({
      component: require('./citylist'),
      title: '选择城市',
      passProps:{
        id: id
      }
    });
  },
  renderList:function (city) {
    return <TouchableHighlight style={styles.list} underlayColor="#f7f7f7" key={city.id} onPress={()=>this.toCities(city.id)}>
      <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,paddingHorizontal:10}}>
      <Text >{city.name}</Text>
      <Image source={require('image!arrow-right')} style={{height:22,width:22}}/>
      </View>
    </TouchableHighlight>
  },
  render: function () {
    return (
      <View style={styles.scrollContainer}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}
          showsVerticalScrollIndicator={true}
          removeClippedSubviews={true}
        >
        {
          DATA.map(this.renderList)
        }
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  scrollContainer:{
    marginTop:44,
    height: 460
  },
  scrollView: {
    height: 460,
    flex: 1
  },
  list:{
    height: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E5E9',
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
