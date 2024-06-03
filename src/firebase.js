// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDlFu6HdSlGuwX9Qs1Yafn6O7f99sawHjQ",
    authDomain: "clone-9fcaa.firebaseapp.com",
    databaseURL: "https://clone-9fcaa.firebaseio.com",
    projectId: "clone-9fcaa",
    storageBucket: "clone-9fcaa.appspot.com",
    messagingSenderId: "1053643438923",
    appId: "1:1053643438923:web:ea246ad6f27363fdadc6ce",
    measurementId: "G-42T4958LXM"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };