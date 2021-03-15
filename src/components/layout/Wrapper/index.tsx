import React from 'react';

import HeaderComponent from '../Header';

import { Wrapper } from './styles';

export const Layout = ({
  signed,
  children
}: {
  signed: boolean | undefined;
  children: React.ReactChild;
}) => {
  return signed ? (
    <Wrapper>
      <HeaderComponent />
      {children}
    </Wrapper>
  ) : (
    <>{children}</>
  );
};

export default Layout;
