import React from 'react';
import Layout from 'components/layout/Wrapper';
import { useUserContext } from 'context/user';
import { Route, Redirect } from 'react-router-dom';

interface RouterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>;
  isPrivate?: boolean;
  path: string;
  exact?: boolean;
}

export const RouteWrapper = ({
  component: Component,
  isPrivate = false,
  ...rest
}: RouterProps) => {
  const { user } = useUserContext();
  const signed = user?.signed;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout signed={signed}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
