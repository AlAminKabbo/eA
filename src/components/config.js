import * as firebase from "firebase"
import "@firebase/auth"
import "@firebase/firestore"

<<<<<<< HEAD
export default function useFirebase(){
   
    const firebaseConfig = {
        apiKey: "AIzaSyDoBxVswLE9ibm-bfjxCjhm0E_gK6uUUvI",
        authDomain: "employeeapp-a7a0a.firebaseapp.com",
        projectId: "employeeapp-a7a0a",
        storageBucket: "employeeapp-a7a0a.appspot.com",
        messagingSenderId: "752311090825",
        appId: "1:752311090825:web:2b8d681611106298055058"
      };
=======

const firebaseConfig = {
    apiKey: "AIzaSyASbvZMzQt7wPR_sTsHK0_8XMxh3fPZuVQ",
    authDomain: "notes-1288e.firebaseapp.com",
    projectId: "notes-1288e",
    storageBucket: "notes-1288e.appspot.com",
    messagingSenderId: "837750690265",
    appId: "1:837750690265:web:3f73534b0a1b808c3cc9c8"
 };
>>>>>>> e8ae551e466b86bbfe892e1905a1036fb1f9dad3
      

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}

