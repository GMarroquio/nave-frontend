import React, { useEffect, useState } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import IconButton from 'components/input/IconButton';
import Input from 'components/input/Input';
import { Container, Form, Title, Header, Content } from './styles';
import { useForm } from 'react-hook-form';
import ButtonComponent from 'components/input/Button';
import { useHistory } from 'react-router';
import { updateUser, getUser } from 'services/user';
import { UserProps } from 'pages/Home';
import Modal from 'components/layout/Modal';
import Loading from 'components/layout/Loading';
import { format } from 'date-fns';

const EditNaver: React.FC = () => {
  const { register, getValues, reset } = useForm({
    defaultValues: {} as UserProps
  });
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const userId = history.location.pathname.split('/')[2];

  useEffect(() => {
    (async () => {
      const user: UserProps = await getUser({
        id: userId
      });

      console.log();
      reset({
        ...user,
        birthdate: format(new Date(user.birthdate), 'yyyy-MM-dd'),
        admission_date: format(new Date(user.admission_date), 'yyyy-MM-dd')
      });
    })();
    //eslint-disable-next-line
  }, []);

  const handleNavigationBack = () => {
    history.push('/');
  };

  const handleSubmitNaver = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUser({ user: getValues(), id: userId });
      setLoading(false);
      setIsOpen(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    history.push('/');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', flex: 1 }}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Container>
        <Content>
          <Header>
            <IconButton
              icon={() => <MdChevronLeft color="#212121" size="24px" />}
              onClick={handleNavigationBack}
            />
            <Title>Editar Naver</Title>
          </Header>
          <Form onSubmit={handleSubmitNaver}>
            <Input register={register} label="nome" name="name" fullWidth />
            <Input
              register={register}
              label="cargo"
              name="job_role"
              fullWidth
            />
            <Input
              register={register}
              label="idade"
              name="birthdate"
              fullWidth
              type="date"
            />
            <Input
              register={register}
              label="tempo de empresa"
              name="admission_date"
              type="date"
              fullWidth
            />
            <Input
              register={register}
              label="projetos que participou"
              name="project"
              fullWidth
            />
            <Input
              register={register}
              label="URL da foto do naver"
              name="url"
              fullWidth
            />
            <div />
            <ButtonComponent
              label="salvar"
              style={{ width: '75%', justifySelf: 'end' }}
              type="submit"
            />
          </Form>
        </Content>
      </Container>
      <Modal
        isOpen={isOpen}
        title="Naver Atualizado"
        message="Naver atualizado com sucesso"
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default EditNaver;
