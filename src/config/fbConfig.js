import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwORzc6pphDQHAPphPpN5O1XRjhhRedDc",
  authDomain: "react-app-iheb.firebaseapp.com",
  databaseURL: "https://react-app-iheb.firebaseio.com",
  projectId: "react-app-iheb",
  storageBucket: "react-app-iheb.appspot.com",
  messagingSenderId: "9452756956",
  appId: "1:9452756956:web:0866aa901491be878bb919",
  measurementId: "G-LSYHNMJKRY"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
