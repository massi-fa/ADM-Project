/* eslint-disable */
import React from 'react';
import { initializeApp } from "firebase/app"
import { getFirestore,collection, query, where,getDocs,then  } from "firebase/firestore"
import { get  } from 'firebase/database';
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
console.log(firebaseApp);
const db = firebase.firestore();
db.collection("Grotte").where("COMUNE", "==", "ALGHERO")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


function App() {
  return (
    <div className="App">
      <h1>ciao</h1>
    </div>
  );
}

export default App;
