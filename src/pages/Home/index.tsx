import React from 'react';
import Card from 'components/layout/Card';

import { Container, Header, Title, CardWrapper } from './styles';
import Button from 'components/input/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Navers</Title>
        <Button label="Adicionar Naver" />
      </Header>
      <CardWrapper>
        <Card
          name="Guilherme Marroquio"
          role="Front-end developer"
          img="https://lh3.googleusercontent.com/pw/ACtC-3do5Jf2PkX7oBXlqAnAFn1UPsklT40yHpouLQQNOHYcl142a3DUgFX8lFU0dzNWVMPyEXeeRpDQ8DNShmVyh4OWBPbsTQ2kmAw7YDGz8_JAWR009SXNIdBtJEq74xo2J_i6LPOp8T-tVWQmGNWhtV1baA=w924-h1642-no?authuser=0"
        />
        <Card
          name="Guilherme Marroquio"
          role="Front-end developer"
          img="https://lh3.googleusercontent.com/pw/ACtC-3do5Jf2PkX7oBXlqAnAFn1UPsklT40yHpouLQQNOHYcl142a3DUgFX8lFU0dzNWVMPyEXeeRpDQ8DNShmVyh4OWBPbsTQ2kmAw7YDGz8_JAWR009SXNIdBtJEq74xo2J_i6LPOp8T-tVWQmGNWhtV1baA=w924-h1642-no?authuser=0"
        />
        <Card
          name="Guilherme Marroquio"
          role="Front-end developer"
          img="https://lh3.googleusercontent.com/pw/ACtC-3do5Jf2PkX7oBXlqAnAFn1UPsklT40yHpouLQQNOHYcl142a3DUgFX8lFU0dzNWVMPyEXeeRpDQ8DNShmVyh4OWBPbsTQ2kmAw7YDGz8_JAWR009SXNIdBtJEq74xo2J_i6LPOp8T-tVWQmGNWhtV1baA=w924-h1642-no?authuser=0"
        />
        <Card
          name="Guilherme Marroquio"
          role="Front-end developer"
          img="https://lh3.googleusercontent.com/pw/ACtC-3do5Jf2PkX7oBXlqAnAFn1UPsklT40yHpouLQQNOHYcl142a3DUgFX8lFU0dzNWVMPyEXeeRpDQ8DNShmVyh4OWBPbsTQ2kmAw7YDGz8_JAWR009SXNIdBtJEq74xo2J_i6LPOp8T-tVWQmGNWhtV1baA=w924-h1642-no?authuser=0"
        />
      </CardWrapper>
    </Container>
  );
};

export default Home;
