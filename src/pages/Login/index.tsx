import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Page,
  Container,
  LoginForm,
  Logo,
  Label,
  Input,
  LoginFormCard,
  Button
} from './styles';
import logo from 'assets/logo.png';

const initial = {
  email: '',
  password: ''
};

const Login: React.FC = () => {
  const { register, getValues } = useForm({ defaultValues: initial });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(getValues());
  };

  return (
    <Page>
      <Container>
        <LoginFormCard>
          <Logo src={logo} />
          <LoginForm onSubmit={onSubmit}>
            <Label>Email</Label>
            <Input placeholder="E-mail" name="email" ref={register} />
            <Label>Senha</Label>
            <Input
              placeholder="Senha"
              type="password"
              name="password"
              ref={register}
            />
            <Button type="submit">Entrar</Button>
          </LoginForm>
        </LoginFormCard>
      </Container>
    </Page>
  );
};

export default Login;
