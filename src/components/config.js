import * as firebase from "firebase"
import "@firebase/auth"
import "@firebase/firestore"


const firebaseConfig = {
        apiKey: "AIzaSyDIGeh-655Uwm7aMfeiisFKu3tHZGnqO44",
        authDomain: "noteapp-a6b84.firebaseapp.com",
        projectId: "noteapp-a6b84",
        storageBucket: "noteapp-a6b84.appspot.com",
        messagingSenderId: "637254639763",
        appId: "1:637254639763:web:a766fd1db31ea810ccad66"
      };
      

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}

