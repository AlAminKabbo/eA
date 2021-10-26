import * as firebase from 'firebase';
import  '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDMYUC6xrQHtiOWQgspgy5WNKyHfKncujk",
    authDomain: "noteapp-77245.firebaseapp.com",
    projectId: "noteapp-77245",
    storageBucket: "noteapp-77245.appspot.com",
    messagingSenderId: "954513842582",
    appId: "1:954513842582:web:748c9f49c725c954957db7"
  };

if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}

export  {firebase}