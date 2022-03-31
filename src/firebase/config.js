import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVm7fGZvPMaYEc96mR-oBWX4RzvqkbKMg",
    authDomain: "newolx-914b9.firebaseapp.com",
    projectId: "newolx-914b9",
    storageBucket: "newolx-914b9.appspot.com",
    messagingSenderId: "559895767025",
    appId: "1:559895767025:web:d0165a058d7efd8e898650",
    measurementId: "G-N8PP45QSMG"
  };

export default firebase.initializeApp(firebaseConfig);
