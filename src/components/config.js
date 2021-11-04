import * as firebase from "firebase"
import "@firebase/auth"
import "@firebase/firestore"

export default function useFirebase(){
   
    const firebaseConfig = {
        apiKey: "AIzaSyDoBxVswLE9ibm-bfjxCjhm0E_gK6uUUvI",
        authDomain: "employeeapp-a7a0a.firebaseapp.com",
        projectId: "employeeapp-a7a0a",
        storageBucket: "employeeapp-a7a0a.appspot.com",
        messagingSenderId: "752311090825",
        appId: "1:752311090825:web:2b8d681611106298055058"
      };
      

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

return{
    firebase
}
}

