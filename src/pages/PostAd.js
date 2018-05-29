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
import AutoCompleteField from '../components/AutoCompleteField'

var options = {
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class PostAd extends Component {
  render() {
    return (
   <View style={styles.container}>
  {/* <GooglePlacesAutocomplete
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
  onPress = {(event, data)=>{ console.log(data)}}
  query={{key: 'AIzaSyA0KthQ52_JCSo5CVuo0YYWvRZwibB0Q_U',
    language: 'en', types: '(cities)'}}
  /> */}
<AutoCompleteField onItemPress = {data =>{ console.log(data)}}/>

  </View>
    );
  }


  componentDidMount() {

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
