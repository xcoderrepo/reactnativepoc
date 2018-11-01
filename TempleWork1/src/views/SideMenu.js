import React, { Component } from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export class SideMenu extends Component {
 
    render () {
      return (
        <View >
          <ScrollView>
            <View>
              <Text >
                Section 1
              </Text>
              <View>
                <Button onPress={() => {
                    Actions.DialogPOCPage1()
                    }}
                    title = "Page1">
                
                </Button>
              </View>
            </View>
            <View>
              <Text>
                Section 2
              </Text>
              <View >
                <Button  onPress={() => {
                    Actions.HomePage1()
                }}
                title = "Page2">
                  
                </Button>
                <Text >
                  Page3
                </Text>
              </View>
            </View>
          </ScrollView>
          <View >
            <Text>This is my fixed footer</Text>
          </View>
        </View>
      );
    }
}
  