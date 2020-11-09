import React from 'react';

import { Container } from './styles';

export interface Props {
  textAlign?: string;
}

const City: React.FC<Props> = ({
  textAlign
}) => {
  return (
    <Container textAlign={textAlign}>
      <strong>São Luis</strong>
      <span>Maranhão</span>
    </Container>
  );
};

export default City;
