import React, { useEffect, useState } from 'react';
import Layout from 'components/layout/Wrapper';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from 'utils/userStorage';
import { useUserContext } from 'context/user';
import Loading from 'components/layout/Loading';

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
  const { user, setUser } = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getUser());
    setLoading(false);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Loading />
      </div>
    );
  }

  if (!user?.signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (user?.signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout signed={user?.signed}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
