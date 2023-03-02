
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
   
const firebaseConfig = {
        apiKey: "AIzaSyCBO8Iz-Ks1cybK9AN_vdTixBRKC_Fa-Dg",
        authDomain: "clone-30e1c.firebaseapp.com",
        projectId: "clone-30e1c",
        storageBucket: "clone-30e1c.appspot.com",
        messagingSenderId: "707069689699",
        appId: "1:707069689699:web:dbc9ad9073b9d2b2489d56"
      };


      const firebaseApp = firebase.initializeApp(firebaseConfig);

      const db = firebaseApp.firestore();
      const auth = firebase.auth();
      const provider = new firebase.auth.GoogleAuthProvider();

      export {db ,auth, provider }