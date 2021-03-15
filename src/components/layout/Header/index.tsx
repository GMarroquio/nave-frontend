import Button from 'components/input/Button';
import { useUserContext } from 'context/user';
import React from 'react';

import { Header, Logo } from './styles';

import logo from 'assets/logo.png';

const HeaderComponent: React.FC = () => {
  const { logout } = useUserContext();
  return (
    <Header>
      <Logo src={logo} />
      <Button label="sair" onClick={logout} variant="secondary" />
    </Header>
  );
};

export default HeaderComponent;
