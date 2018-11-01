import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { HomeViewModel } from '../viewmodels/HomeViewModel';


export class Home extends Component {

  render() {

  return (
    <View>
        <Button
           onPress ={() => 
            {
             Actions.DbAndLocalStorage()
            }
          }
            title="DbAndLocal Storage POC"
          />
        <Button
           onPress ={() => Actions.DetailsPage()}
            title="Go to Other POC page..."
          />
        <Button
           onPress ={async() => 
            {
              var vm = new HomeViewModel();
              var data = await vm.loadData();
            }
          }
            title="Server Intigaration POC"
          />
    </View>
    );
  }
}