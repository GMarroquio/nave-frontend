import React from 'react';

import Header from '../Header';

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
      <Header />
      {children}
    </Wrapper>
  ) : (
    <>{children}</>
  );
};

export default Layout;
