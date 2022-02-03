import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid;
  border-radius: 15px;
  margin: 10px;
`;

const Text = styled.h1`
  font-size: 1rem;
  margin: auto;
`;

const General = ({
  fields,
  values,
}) => (
  <Container>
    {
      fields.map((element) => (
        <Text key={element.key}>{element} = {values[element]} </Text>
      ))
    }
  </Container>
);

General.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  values: PropTypes.oneOf([PropTypes.object, PropTypes.array]).isRequired,
};

export default General;
