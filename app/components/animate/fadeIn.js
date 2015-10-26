const React = require('react-native');
const {
  View,
  Animated
} = React;

module.exports = class FadeInView extends React.Component{
  constructor(props) {
    super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
  }
  componentDidMount() {
    Animated.spring(this.state.fadeAnim,{
      toValue: 1
    }).start();
  }
  render(){
    return (
      <Animated.View
      style={{
        opacity: this.state.fadeAnim, // Binds directly
        transform: [{
          translateY: this.state.fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
          }),
        }],
}}>
         {this.props.children}
       </Animated.View>
    );
  }
};
