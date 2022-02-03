/* eslint-disable */
import React from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase

  
var db = firebase.firestore();

var menu =[  
    {  
       "id":1,
       "name":"Focaccia al rosmarino",
       "description":"Wood fired rosemary and garlic focaccia",
       "price":8.50,
       "type":"Appetizers"
    },
    {  
       "id":2,
       "name":"Burratta con speck",
       "description":"Burratta cheese, imported smoked prok belly prosciutto, pached balsamic pear",
       "price":13.50,
       "type":"Appetizers"
    }
 ]

menu.forEach(function(obj) {
    db.collection("menu").add({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
        type: obj.type
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

function App() {
  return (
    <div className="App">
      <h1>ciao</h1>
    </div>
  );
}

export default App;
