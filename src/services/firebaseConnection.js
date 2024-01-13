import firebase from "firebase";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCA1uadgnpC2eNFmvlgdl1-iF50Wqbtwjs",
    authDomain: "eafv-90f32.firebaseapp.com",
    databaseURL: "https://eafv-90f32-default-rtdb.firebaseio.com",
    projectId: "eafv-90f32",
    storageBucket: "eafv-90f32.appspot.com",
    messagingSenderId: "598406269328",
    appId: "1:598406269328:web:077f55c2d5ee41238a4b15"
  };

  if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;