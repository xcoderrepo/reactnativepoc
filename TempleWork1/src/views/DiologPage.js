import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { ConfirmDialog, ProgressDialog } from 'react-native-simple-dialogs';

export class DialogPOCPage extends Component {

state = {};

openConfirm(show) {
    this.setState({ showConfirm: show })
}

openProgress() {
    this.setState({ showProgress: true })

    setTimeout(()=>
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      this.setState({ showProgress: false }), 15000);
}

optionYes() {
    this.openConfirm(false);
    // Yes, this is a workaround :(
    // Why? See this https://github.com/facebook/react-native/issues/10471
    setTimeout(() => alert("Yes touched!"), 5000);
}

optionNo() {
    this.openConfirm(false);
    // Yes, this is a workaround :(
    // Why? See this https://github.com/facebook/react-native/issues/10471
    setTimeout(() => alert("No touched!"), 100);
}

  render() {
    
    return (
      <View>
        <Text>DialogPOC Screen</Text>
        <Button
          onPress ={() => this.openConfirm(true)}
          title="Show Dialog"
        />


        <Button
          onPress ={() => this.openProgress()}
          title="Open Progressbar"
        />

        <ConfirmDialog
            title="Confirm Dialog"
            message="Are you sure about that?"
            visible={this.state.showConfirm}
            onTouchOutside={() => this.openConfirm(false)}
            positiveButton={{
                title: "YES",
                onPress: () => this.optionYes()
            }}
            negativeButton={{
                title: "NO",
                disabled: false,
                titleStyle: {
                    color: 'blue',
                    colorDisabled: 'aqua',
                },
                style: {
                    backgroundColor: 'transparent',
                    backgroundColorDisabled: 'transparent',
                },
                onPress: () => this.optionNo()
            }}
        />


        <ProgressDialog
            visible={this.state.showProgress}
            title="Progress Dialog"
            message="Please, wait..."
            animationType="slide"
            activityIndicatorSize="large"
            activityIndicatorColor="blue"
        />
      </View>
    );
}

}