import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {apiKey: "AIzaSyDGo73aOq3h0ZYJJA_MY3JRJcEVhHF_DL4",
    authDomain: "crwn-db-cf8fd.firebaseapp.com",
    databaseURL: "https://crwn-db-cf8fd.firebaseio.com",
    projectId: "crwn-db-cf8fd",
    storageBucket: "crwn-db-cf8fd.appspot.com",
    messagingSenderId: "2309287960",
    appId: "1:2309287960:web:2edc4acc26cbc9bac8536d",
    measurementId: "G-ZGH9FCCC6D"
  };
firebase.initializeApp(config);
export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;