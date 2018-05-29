import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity, TextInput,
  View
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class PostAd extends Component {
    
    
    constructor(props){
        super(props)


    }
    
    
    
    
    render() {
      return (

    <GooglePlacesAutocomplete
    placeholder='Enter Location'
    enablePoweredByContainer = {false}
    minLength={2}
    autoFocus={false}
    returnKeyType={'default'}
    fetchDetails={true}
    styles={{
      textInputContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderTopWidth: 0,
        borderBottomWidth:0
      },
      textInput: {
        marginLeft: 0,
        marginRight: 0,
        height: 38,
        color: '#5d5d5d',
        fontSize: 16
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      },
    }}
    currentLocation={false} 
    onPress = {this.onItemPress}
    query={{key: 'AIzaSyA0KthQ52_JCSo5CVuo0YYWvRZwibB0Q_U',
      language: 'en', types: '(cities)'}}
    />

      );
    }

    onItemPress = (event, data) =>{

        this.props.onItemPress(data)

    }
  
  
   
    
  }