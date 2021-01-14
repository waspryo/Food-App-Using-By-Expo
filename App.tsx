import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen';
import {LandingScreen} from './src/screens/LandingScreen';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator({
        Landing: LandingScreen
    },{
      defaultNavigationOptions: {
        headerShown: false,
      }
    })
  },
  homeStack: createBottomTabNavigator({
    // Home tab Icon
    Home: {
      screen: createStackNavigator({
        HomePage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png')
          return <Image source={icon} style={styles.tabIcon}/>
        }
      }
    },
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png')
          return <Image source={icon} style={styles.tabIcon}/>
        }
      }
    },
    Cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused == true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png')
          return <Image source={icon} style={styles.tabIcon}/>
        }
      }
    },
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => {
          let icon = focused == true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png')
          return <Image source={icon} style={styles.tabIcon}/>
        }
      }
    }
  })
})

const AppNavigation = createAppContainer(switchNavigator)

export default function App() {
  return (
    <AppNavigation/>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  },
});
