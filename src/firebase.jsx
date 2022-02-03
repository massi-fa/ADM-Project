/* eslint-disable */

import firebase from "firebase/compat";
const firebaseConfig = {
  apiKey: "AIzaSyB5U9rNuMCcTH4Fz_Y49Jg5YZrLdbX2wh4",
  authDomain: "adm-practice-test.firebaseapp.com",
  databaseURL: "https://adm-practice-test-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adm-practice-test",
  storageBucket: "adm-practice-test.appspot.com",
  messagingSenderId: "580166880322",
  appId: "1:580166880322:web:3b8e56eb5c81fd0227b1db",
  measurementId: "G-YZV05N2KPM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;