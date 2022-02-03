/* eslint-disable */
import React from 'react';
import db from './firebase';

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


const App = () => (
  <div className="App">
    <h1>ciao</h1>
  </div>
);


export default App;
