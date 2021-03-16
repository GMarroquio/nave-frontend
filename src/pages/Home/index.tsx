import React, { useEffect, useState } from 'react';
import Card from 'components/layout/Card';
import { Container, Header, Title, CardWrapper } from './styles';
import Button from 'components/input/Button';
import { getAll } from 'services/user';
import { useHistory } from 'react-router';

export interface UserProps {
  admission_date: string;
  birthdate: string;
  id: string;
  job_role: string;
  name: string;
  project: string;
  url: string;
  user_id: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const history = useHistory();

  useEffect(() => {
    getAll().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleNavigationAddNaver = () => {
    history.push('/add');
  };

  return (
    <Container>
      <Header>
        <Title>Navers</Title>
        <Button label="Adicionar Naver" onClick={handleNavigationAddNaver} />
      </Header>
      <CardWrapper>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Home;
