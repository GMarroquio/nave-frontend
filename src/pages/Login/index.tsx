import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Page, Container, LoginForm, Logo, LoginFormCard } from './styles';
import logo from 'assets/logo.png';
import InputComponent from 'components/input/Input';
import ButtonComponent from 'components/input/Button';
import { useUserContext } from 'context/user';
import Loading from 'components/layout/Loading';

const initial = {
  email: '',
  password: ''
};

const Login: React.FC = () => {
  const { register, getValues } = useForm({
    defaultValues: initial,
    shouldUnregister: false
  });
  const { login } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await login(getValues());
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ flex: 1, display: 'flex' }}>
        <Loading />
      </div>
    );
  }

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
              error={error}
            />
            <InputComponent
              register={register}
              label="senha"
              name="password"
              type="password"
              error={error}
            />
            <ButtonComponent label="Entrar" type="submit" />
          </LoginForm>
        </LoginFormCard>
      </Container>
    </Page>
  );
};

export default Login;
