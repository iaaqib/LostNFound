import * as firebase from 'firebase';


// Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyA5JYd0c7BIXsVIanrhYLl7y4U9wRp-bGM",
    authDomain: "lostnfound-ab5b2.firebaseapp.com",
    databaseURL: "https://lostnfound-ab5b2.firebaseio.com",
    projectId: "lostnfound-ab5b2",
    storageBucket: "lostnfound-ab5b2.appspot.com",
    messagingSenderId: "565429562242"
  };
  export const firebaseApp = firebase.initializeApp(firebaseConfig);



  export const firebaseAuth =  firebaseApp.auth();
  export const firebaseRef = firebaseApp.database().ref()
  export const firebaseStorage = firebaseApp.storage().ref('images')