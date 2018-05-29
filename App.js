// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Button, 
  View, Dimensions
} from 'react-native';
import Map from './src/pages/Map';
import PostAd from './src/pages/PostAd'
import * as firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';



import {firebaseRef, firebaseStorage } from './src/configuration/firebaseConfig'


import RNFetchBlob from 'react-native-fetch-blob'

// import AuthScreen from './src/containers/AuthScreen'
// import HomeScreen from './src/containers/HomeScreen'


var options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
};

//var firebaseRef


export default class App extends Component {

 
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    console.log("Navigation Params")
    console.log(params)
    return {
        headerRight: <Button
                         title="Menu"
                         onPress={ () => params.handleThis() } backgroundColor = 'rgba(52, 52, 52, 0.8)' />
    };
};
  constructor(props){
    super(props)

    this.state = {isLoading: true}

  // firebaseRef = firebase.database().ref()
   
    console.log(this.firebaseRef)
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleThis: this.onCameraButtonPress
  });

  }



  onPressLocatePlaces(){
    this.props.navigation.navigate('MapScreen', {data: 'Coming From FirstScreen'})
  }

   onCameraButtonPress = () => {
   this.props.navigation.navigate('PostAdScreen', {data: 'Coming From FirstScreen'})

    firebaseRef.push().set({"hello" : "Camera button tapped" }).then(data => {
      console.log(data)
    }).catch(e =>{
      console.log(e)
    });
    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
       
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data }


       this.reduceImageSize(response)

      }
    })
  }
  reduceImageSize = (imageResponse) => {
    ImageResizer.createResizedImage(imageResponse.uri, imageResponse.width,imageResponse.height, 'JPEG', 40).then((response) => {
      console.log(response)
      console.log('Response = ', response);
    
      let image = response.path
      console.log(response.uri)
      const Blob = RNFetchBlob.polyfill.Blob
      const fs = RNFetchBlob.fs
      window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
      window.Blob = Blob




  let uploadBlob = null
  let mime = 'image/jpg'
  let timeStamp = imageResponse.timestamp
  fs.readFile(image, 'base64')
    .then((data) => {
      return Blob.build(data, { type: `${mime};BASE64` })
  })
  .then((blob) => {
      uploadBlob = blob
      return firebaseStorage.child('IMG-'+timeStamp).put(blob, { contentType: mime })
    })
    .then(() => {
      uploadBlob.close()
      return firebaseStorage.child('IMG-'+timeStamp).getDownloadURL()
    })
    .then((url) => {
      // URL of the image uploaded on Firebase storage
      console.log(url);
      
    })
    .catch((error) => {
      console.log(error);

    })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
    <Map/>    
    );
  }

  componentWillMount(){
    // Launch Camera:
   
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4DB6AC'

  },
  bodyContainer: {
    flexDirection: 'column',
    width: '100%',
    height: Dimensions.get('window').height/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4DB6AC',
    
     
  },
  buttons: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});




/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */
