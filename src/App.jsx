/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import db from './firebase';
import Grotta from './components/Grotta';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const App = () => {
  const [data, setData] = useState(null);
  const res = [];
  useEffect(() => {
    db.collection('Grotte').where('COMUNE', '==', 'ALGHERO').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          res.push(doc.data());
        });
        setData(res);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);

  if (!data) {
    // You can render a placeholder if you like during the load, or just return null to render nothing.
    return null;
  }

  return (
    <Container>
      {
        data.map((element) => (
          <Grotta nome={element.COMUNE} comune={element.NOME} provincia={element.PROVINCIA} regione={element.REGIONE} key={element.IDFEATURE} />
        ))
      }
    </Container>
  );
};

export default App;
