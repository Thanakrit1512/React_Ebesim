/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './src/Page/HomeScreen';
import OderScreen from './src/Page/OderScreen';
import CartScreen from './src/Page/CartScreen';
import ProfileScreen from './src/Page/ProfileScreen';
import ScanScreen from './src/Page/PaymentScreen';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon name="home" size={24} color="#E2E1E0" />
          </View>
        ),
      },
    },
    Oders: {
      screen: OderScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              name="comments"
              size={24}
              color="#E2E1E0"
              backgroundColor="#2163f6"
            />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
      },
    },
    Payment: {
      screen: ScanScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon name="qrcode" size={30} color="#F5B041" />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaaed',
      },
    },
    Favourite: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon name="heart" size={24} color="#E2E1E0" />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon name="user" size={20} color="#E2E1E0" />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaaed',
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: {backgroundColor: '#2C3E50'},
  },
);

export default createAppContainer(TabNavigator);
