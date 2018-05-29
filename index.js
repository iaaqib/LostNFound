import { AppRegistry, Button } from 'react-native';
import React, {Component} from 'react';
import App from './App';
import Map from './src/pages/Map';
import PostAd from './src/pages/PostAd';
import LoginAnimation from './src/pages/LoginScreen'


import firebaseApp from './src/configuration/firebaseConfig';
 
import {
    StackNavigator,
  } from 'react-navigation';

  const MainStack = StackNavigator({
    
  HomeScreen: {
    screen: App, navigationOptions: {
     title: 'Home',
   } },

 PostAdScreen: { 
   screen: PostAd, navigationOptions: {
     title: 'PostAd' 
   }
   
 }
}
  );

const RootStack = StackNavigator({
  LoginModal: {
    screen: LoginAnimation
  },
  Main: {
    screen: MainStack
  }

},
 {
  mode: 'modal',
  headerMode: 'none'
} 
)

AppRegistry.registerComponent('LostNFound', () => RootStack);
