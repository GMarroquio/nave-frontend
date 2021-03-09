import Button from 'components/input/Button';
import { useUserContext } from 'context/user';
import React from 'react';

import { Wrapper, Logo } from './styles';

import logo from 'assets/logo.png';

const Header: React.FC = () => {
  const { logout } = useUserContext();
  return (
    <Wrapper>
      <Logo src={logo} />
      <Button label="sair" onClick={logout} variant="secondary" />
    </Wrapper>
  );
};

export default Header;
