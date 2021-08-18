import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Realm from "realm";

import EmployeesList from "./src/containers/EmployeesList";
import EmployeeDetails from "./src/containers/EmployeeDetails";
import {JSON_URL, Company, Geo, Address, EmployeeSchema} from './src/common/constants';

const Stack = createNativeStackNavigator();

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.addData();
  }

  addData = async () => {
    const realm = await Realm.open({
      path: "employeeRealm",
      schema: [Company, Geo, Address, EmployeeSchema],
    });
    const employees = realm.objects("Employee");
    let _self = this;
    if(employees && employees.length > 0) {
      _self.setState({loading: false});
      return;
    } else {
      fetch(JSON_URL)
          .then((response) => response.json())
          .then((json) => {
            if(json.length > 0){
              realm.write(() => {
                json.forEach(obj => {
                    realm.create('Employee', obj);
                });
              });
            }
            realm.close();
            _self.setState({loading: false});
          })
          .catch((error) => {
            console.error(error);
            realm.close();
            _self.setState({loading: false});
          });
    }
  }

  render(){
    const { loading } = this.state;
    if(loading){
      return (<View><Text>Loading....</Text></View>);
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Employees" component={EmployeesList} />
          <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  )};
}

export default App;