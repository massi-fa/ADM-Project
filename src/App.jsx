import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import db from './firebase';
import General from './components/General';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const App = () => {
  const [data, setData] = useState(null);
  const [fields, setFields] = useState(null);
  const res = [];
  useEffect(() => {
    db.collection('Grotte').orderBy('NOME').limit(1).get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setFields(Object.getOwnPropertyNames(doc.data()));
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
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

  console.log(fields);
  if (!data) {
    // You can render a placeholder if you like during the load, or just return null to render nothing.
    return null;
  }
  return (
    <Container>
      {
        data.map((element) => (
          <General fields={fields} values={element} key={element.key} />
        ))
      }
    </Container>
  );
};

export default App;
