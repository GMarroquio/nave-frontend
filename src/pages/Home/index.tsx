import React, { useEffect, useState } from 'react';
import Card from 'components/layout/Card';
import { Container, Header, Title, CardWrapper } from './styles';
import Button from 'components/input/Button';
import { getAll } from 'services/user';
import { useHistory } from 'react-router';
import { deleteNaver } from 'services/user';
import Loading from 'components/layout/Loading';
import Modal from 'components/layout/Modal';

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
  const [loading, setLoading] = useState(false);
  const [deletedModalIsOpen, setDeletedModalIsOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getAll().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await deleteNaver({ id });
      setUsers((old) => old.filter((u) => u.id !== id));
      setLoading(false);
      setDeletedModalIsOpen(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleNavigationAddNaver = () => {
    history.push('/add');
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <Container>
      <Header>
        <Title>Navers</Title>
        <Button label="Adicionar Naver" onClick={handleNavigationAddNaver} />
      </Header>
      <CardWrapper>
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            image={user.url}
            role={user.job_role}
            handleDelete={() => handleDelete(user.id)}
          />
        ))}
      </CardWrapper>
      <Modal
        title="Naver Excluído"
        message="Naver excluído com sucesso"
        isOpen={deletedModalIsOpen}
        handleClose={() => setDeletedModalIsOpen(false)}
      />
    </Container>
  );
};

export default Home;
