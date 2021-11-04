import * as firebase from "firebase"
import "@firebase/auth"
import "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCcl7p1L2OkCW9FU3AWnzpEOm3j01HB6Yw",
    authDomain: "employeenote-aa1c8.firebaseapp.com",
    projectId: "employeenote-aa1c8",
    storageBucket: "employeenote-aa1c8.appspot.com",
    messagingSenderId: "570356011391",
    appId: "1:570356011391:web:3e666f2fe798df639d0a4a"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}

