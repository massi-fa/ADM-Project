import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 7rem;
  width: 14rem;
  padding: 10px;
  border: 1px solid;
  border-radius: 15px;
  margin: 10px;
`;

const Text = styled.h1`
  font-size: 1rem;
  margin: auto;
`;

const Grotta = ({
  comune,
  nome,
  provincia,
  regione,
}) => (
  <Container>
    <Text>
      Comune: {comune}
    </Text>
    <Text>
      Nome: {nome}
    </Text>
    <Text>
      Provincia: {provincia}
    </Text>
    <Text>
      Regione: {regione}
    </Text>
  </Container>
);

Grotta.propTypes = {
  comune: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  provincia: PropTypes.string.isRequired,
  regione: PropTypes.string.isRequired,
};

export default Grotta;
