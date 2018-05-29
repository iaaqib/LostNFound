/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import  MapView, { PROVIDER_GOOGLE , AnimatedRegion, Marker } from 'react-native-maps';



export default class Map extends Component {


  
  constructor(props) {
    super(props);

    this.region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.06322,
      longitudeDelta: 0.0421,
    }

    this.state = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.06322,
      longitudeDelta: 0.0421,
      error: null, 
      isLocationFound: false,
      region: this.region,
    };
    
    
    
 //   this.coordinates = new AnimatedCoordinate({ latitude: this.state.latitude, longitude: this.state.longitude }) 
   
  }
 
  
  componentWillMount(){
    
    console.log("here");
 
  }
      


  render() {
//     const {isLoading} = this.state;
//     if (isLoading){
//       return <View></View>
//     }
      //     let coordinates = new AnimatedCoordinate({ latitude: this.state.latitude, longitude: this.state.longitude}) 
    return (
//37.78825 -122.4324

      <MapView ref={ mapView => {this.mapView = mapView}}  style={styles.container} provider={PROVIDER_GOOGLE}
      region={this.state.region} >
        <MapView.Marker ref={marker => { this.marker = marker }} coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}} />
      </MapView>
      

    );
  }
  componentDidMount() {

    
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.watchId = navigator.geolocation.getCurrentPosition(
      (position) => {
      if (!this.state.isLocationFound){
        
     
        let temp = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta,
        }

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          isLocationFound: true,
          region: temp
        });


        console.log("Region:")
        console.log(this.region.latitude)
        console.log(this.region.longitude)
        console.log("STATE:")
        console.log(this.state.latitude)
        console.log(this.state.longitude)
        
          this.mapView.animateToRegion(temp, 300)
      }
        
         console.log(position.coords)

      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000},
    );
  
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    navigator.geolocation.clearWatch(this.watchId);
  }

  tick() {
    
   // this.mapView.animateToRegion(this.region, 1000) 
    if (!this.state.isLocationFound && (this.state.latitude != 37.78825 && this.state.longitude != -122.4324)){
    console.log(this.state.region)
    let region = new AnimatedRegion({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: this.state.latitudeDelta,
      longitudeDelta: this.state.longitudeDelta,
    })
    console.log("Region:")
    console.log(this.region)
    this.mapView.animateToRegion(this.region, 1000)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
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
