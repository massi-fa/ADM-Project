/* eslint-disable */
import React from 'react';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get,limitToLast,query  } from 'firebase/database';



//import firebase from  'firebase/compat/app';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig ={
  apiKey: "AIzaSyB5U9rNuMCcTH4Fz_Y49Jg5YZrLdbX2wh4",
  authDomain: "adm-practice-test.firebaseapp.com",
  databaseURL: "https://adm-practice-test-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "adm-practice-test",
  storageBucket: "adm-practice-test.appspot.com",
  messagingSenderId: "580166880322",
  appId: "1:580166880322:web:3b8e56eb5c81fd0227b1db",
  measurementId: "G-YZV05N2KPM"
};


// Initialize the default app
const defaultApp = initializeApp(firebaseConfig);
const databaseForDefaultApp =getDatabase(defaultApp);
const dbRef = ref(getDatabase(defaultApp));

console.log(defaultApp.name);  // '[DEFAULT]'
console.log(dbRef); 
console.log(databaseForDefaultApp.name); 



var index=0;
const refGrotte=get(child(dbRef, `Grotte`));


refGrotte.then((snapshot) => {
  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot)=> {
      var key = childSnapshot.key;
      var childData = childSnapshot.val().COMUNE;
      console.log(childData);
    });}
   else {
    console.log("No data available");
  }
});

function App() {
  return (
    <div className="App">
      <h1>ciao</h1>
    </div>
  );
}

export default App;
