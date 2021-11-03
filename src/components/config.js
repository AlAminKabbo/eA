import * as firebase from "firebase"
import "@firebase/auth"
import "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyASbvZMzQt7wPR_sTsHK0_8XMxh3fPZuVQ",
    authDomain: "notes-1288e.firebaseapp.com",
    projectId: "notes-1288e",
    storageBucket: "notes-1288e.appspot.com",
    messagingSenderId: "837750690265",
    appId: "1:837750690265:web:3f73534b0a1b808c3cc9c8"
 };
      

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}

