import React, { useState } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import IconButton from 'components/input/IconButton';
import Input from 'components/input/Input';
import {
  Container,
  Form,
  Title,
  Header,
  Content,
  ButtonWrapper
} from './styles';
import { useForm } from 'react-hook-form';
import ButtonComponent from 'components/input/Button';
import { useHistory } from 'react-router';
import { createUser } from 'services/user';
import { UserProps } from 'pages/Home';
import Modal from 'components/layout/Modal';
import Loading from 'components/layout/Loading';

const AddNaver: React.FC = () => {
  const { register, getValues } = useForm({ defaultValues: {} as UserProps });
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationBack = () => {
    history.push('/');
  };

  const handleSubmitNaver = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUser(getValues());
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
            <Title>Adicionar Naver</Title>
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
            <ButtonWrapper>
              <ButtonComponent label="salvar" type="submit" />
            </ButtonWrapper>
          </Form>
        </Content>
      </Container>
      <Modal
        isOpen={isOpen}
        title="Naver Criado"
        message="Naver criado com sucesso"
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default AddNaver;
