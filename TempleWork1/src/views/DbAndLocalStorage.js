import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import SharedPreferences from 'react-native-shared-preferences';
import {NativeModules} from 'react-native';

const FileIO = NativeModules.FileIO;

let db;

export class DbAndLocalStorage extends React.Component {

  constructor(){
    super();
  this.showAlert();

  // setInterval(()=> {

  // this.showAlert();
  // }, 10000);
}


showAlert()
{

  db = SQLite.openDatabase({name : "testDB"}, this.dbCreaatedSuccessfully,this.errorCallback);
  
  Alert.alert(
    'Row inserted',
    "Hello" ,
    [
      {text: 'Sqlite Demo', onPress: () => this.sqLiteDemo() },
      {text: 'localPrefrencePOC', onPress: () =>  this.localPrefrencePOC(), style: 'cancel'},
      {text: 'OK', onPress: () => this.IOPoc () },
    ],
    { cancelable: false }
  );
}

errerrorCallbackorCB = (err) => {
  console.log("error: ",err);
  return false;
}

dbCreaatedSuccessfully = () => {
  console.log("SQL executed ...");
}
sqLiteDemo = () => {

  db.transaction(this.populateDB, this.errerrorCallbackorCB, this.successFullyCreated);

  db.transaction(this.queryEmployees,this.errerrorCallbackorCB,this.successFullyCreated);
}


successFullyCreated = () => {
  console.log("SQL successFullyCreated ...");
}

populateDB = (tx) =>
  {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Employees( '
      + 'employe_id VARCHAR(55), '
      + 'name VARCHAR(55), '
      + 'office VARCHAR(55), '
      + 'department VARCHAR(55));');

      tx.executeSql('INSERT INTO Employees (employe_id,name, office, department) VALUES ("2","Sylvester Stallone", "2",  "4");', []);

  };

  queryEmployees = (query)=>
  {
    query.executeSql('SELECT name FROM Employees',[],
      this.queryEmployeesSuccess,this.errerrorCallbackorCB); 
  }

  queryEmployeesSuccess = (tx,results) => 
  {
    var len = results.rows.length;
    for (let i = 0; i < len; i++) {
      let row = results.rows.item(i);
      let name = row.name;
    }
  }

    // React Native File system and Native Module and Promise POC
  IOPoc()
  {
    var a =  FileIO.saveSync('test',"encoded data").then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }

  IOCallback = (error, output) => {
    console.log("FIle created ..." + output);
    console.log("There is error ..." + error);

  }


  localPrefrencePOC()
  {

    // React Native Shared Preferences

    SharedPreferences.setItem('my key', 'my value');

    SharedPreferences.getItem('my key',function(value) {
      console.log(value);
    });

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
