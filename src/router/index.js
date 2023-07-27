import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {Akun, Dashboard, Detail, Login, Pesanan} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="  Akun   "
        component={Akun}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
