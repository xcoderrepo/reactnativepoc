import React, { Component } from "react";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { View, Text } from "react-native";

export class BasicReactElementsPage extends Component {

  constructor () {
    super()
    this.state = {
      types1: [{label: 'param1', value: 0}, {label: 'param2', value: 1}],
      value1: 0,
      value1Index: 0,
    }
  }

  render() {
  
    return (
      <View>
            <RadioForm 
              ref="radioForm"
              radio_props={this.state.types1}
              initial={0}
              formHorizontal={true}
              labelHorizontal={false}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
                this.setState({
                  value1:value,
                  value1Index:index
                })
              }}
            />
            <Text>selected: {this.state.types1[this.state.value1Index].label}</Text>  
            
      </View>
    );
  }
}