import React, { Component } from 'react';
import AuthScreen from '../containers/AuthScreen'
import HomeScreen from '../containers/HomeScreen'
import {firebaseAuth} from '../configuration/firebaseConfig'
import * as firebase from 'firebase'

//var firebaseAuth
export default class LoginAnimation extends Component {
    state = {
      isLoggedIn: false, // Is the user authenticated?
      isLoading: false, // Is the user loggingIn/signinUp?
      isAppReady: false // Has the app completed the login animation?
    }
    
    constructor(props){
        super(props)
      //  firebaseAuth = firebase.auth()
    }
    /**
     * Two login function that waits 1000 ms and then authenticates the user succesfully.
     * In your real app they should be replaced with an API call to you backend.
     */
    _simulateLogin = (username, password) => {
      this.setState({ isLoading: true })
      setTimeout(() => this.setState({ isLoggedIn: true, isLoading: false }), 1000)
      this.props.navigation.navigate('Main', {data: 'Coming From FirstScreen'})
    }
  
    _simulateSignup = (username, password, fullName) => {
     console.log(username)

     console.log(password)
     console.log(fullName)
    
//     firebaseAuth.createUserWithEmailAndPassword("email@cccc.com", "passwo").then(resp =>{
//         console.log(resp.uid)
//     })
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// })

      this.setState({ isLoading: true })
      setTimeout(() => this.setState({ isLoggedIn: false, isLoading: false }), 1000)
    }
  
    /**
     * Simple routing.
     * If the user is authenticated (isAppReady) show the HomeScreen, otherwise show the AuthScreen
     */
    render () {
      console.log("IAMHERE")
      if (this.state.isAppReady) {
        return (
          <HomeScreen
            logout={() => this.setState({ isLoggedIn: false, isAppReady: false })}
          />
        )
      } else {
        return (
          <AuthScreen
            login={this._simulateLogin}
            signup={this._simulateSignup}
            isLoggedIn={this.state.isLoggedIn}
            isLoading={this.state.isLoading}
            onLoginAnimationCompleted={() => this.setState({ isAppReady: false })}
          />
        )
      }
    }
  }
  
  