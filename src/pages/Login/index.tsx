import React from 'react';
import { useForm } from 'react-hook-form';

import { Page, Container, LoginForm, Logo, LoginFormCard } from './styles';
import logo from 'assets/logo.png';
import InputComponent from 'components/Input';
import ButtonComponent from 'components/Button';
import { login } from 'services/user';

const initial = {
  email: '',
  password: ''
};

const Login: React.FC = () => {
  const { register, getValues } = useForm({ defaultValues: initial });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(getValues());
    await login(getValues());
  };

  return (
    <Page>
      <Container>
        <LoginFormCard>
          <Logo src={logo} />
          <LoginForm onSubmit={onSubmit}>
            <InputComponent
              register={register}
              label="e-mail"
              name="email"
              type="email"
            />
            <InputComponent
              register={register}
              label="senha"
              name="password"
              type="password"
            />
            <ButtonComponent label="Entrar" type="submit" />
          </LoginForm>
        </LoginFormCard>
      </Container>
    </Page>
  );
};

export default Login;
