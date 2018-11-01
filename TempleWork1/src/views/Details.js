import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import ActionSheet from 'react-native-actionsheet';

export class Details extends Component {

  render() {
  
      return (
        <View>
          <Text>Details Screen</Text>
          <Button
           onPress ={() => Actions.drawer()}
           title="Drawer POC"
          />
          <Button
           onPress ={() =>
            {
              this.showActionSheet();
            }
           }
            title="Actionsheet POC"
          />
          <Button
           onPress ={() =>
            {
              Actions.DialogPOCPage();
            }
           }
            title="Diolog and Popup POC"
          />
          <Button
           onPress ={() =>
            {
              Actions.LottieViewPage()
            }
           }
            title="Lottie Loder POC"
          />
          <Button
            onPress ={() => Actions.DotIndicatorPage()}
            title="View Pager POC"
          />
          <Button
            onPress ={() => Actions.BasicReactElementsPage()}
            title="BasicReactElements POC"
          />      
          <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Which one do you like ?'}
          options={['Apple', 'Banana', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => {

            var clickedIndex = index;

          }}
        />

        </View>
      );
  }

  showActionSheet = () => {
    this.ActionSheet.show()
  }

}