import React from 'react';
import { Animated, Easing, Button, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { Actions } from "react-native-router-flux";

export class LottieViewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      showLoader:true
    }

    this.state = {
      progress: new Animated.Value(0),
    };
  }

  toggleLoader () {
    this.setState({
        showLoader: !this.state.showLoader
    });
}

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (

      <View  style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Button
      
      onPress ={
        () =>  
        {
          Actions.HomePageReset();// this.toggleLoader();
        }
      }
        title="Go To Root Page"
      />
      <Button
      
      onPress ={
        () =>  
        {
          this.toggleLoader();
        }
      }
        title="Toogle loader"
      />
       {
      this.state.showLoader ?
      <LottieView style = {{ height:200, width:200, backgroundColor: 'blue'}}
      autoPlay={true}
      source={require('../lottieanimations/loader.json')}  />  : null
       }  
      </View>

    );
  }
}