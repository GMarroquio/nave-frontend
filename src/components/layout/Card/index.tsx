import IconButton from 'components/input/IconButton';
import React, { useState } from 'react';
import { MdClose, MdCreate, MdDelete } from 'react-icons/md';
import Modal from '../Modal';
import { UserProps } from '../../../pages/Home';
import { Container, Image, Name, Role } from './styles';
import { deleteNaver } from 'services/user';
import { Message, Title } from '../Modal/styles';
import ButtonComponent from 'components/input/Button';
import Loading from '../Loading';
import { useUserContext } from 'context/user';

interface CardProps {
  user: UserProps;
}

interface DeleteModalComponentProps {
  closeModal: () => void;
  userId: string;
}

export const DeleteModalComponent = ({
  closeModal,
  userId
}: DeleteModalComponentProps) => {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDeleteNaver = async () => {
    setLoading(true);
    try {
      await deleteNaver({ id: userId });
      setLoading(false);
      setDeleted(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleClose = () => {
    closeModal();
  };

  if (loading) return <Loading />;

  if (deleted)
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Title>Naver Excluído</Title>
          <IconButton
            icon={() => <MdClose color="#212121" size="24px" />}
            onClick={handleClose}
          />
        </div>
        <Message>Naver excluído com sucesso</Message>
      </>
    );

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Title>Excluir Naver</Title>
      </div>
      <Message>Tem certeza que deseja excluir este Naver?</Message>
      <div
        style={{
          display: 'flex',
          width: '75%',
          marginTop: '40px',
          marginLeft: 'auto'
        }}
      >
        <ButtonComponent
          label="cancelar"
          onClick={closeModal}
          variant="secondary"
          border
          style={{ width: '100%', marginRight: '24px' }}
        />
        <ButtonComponent
          label="excluir"
          onClick={handleDeleteNaver}
          style={{ width: '100%' }}
        />
      </div>
    </>
  );
};

const Card: React.FC<CardProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClickDeleteNaver = async () => {
    setDeleteModalOpen(true);
  };

  return (
    <>
      <Container>
        <div onClick={handleOpenModal}>
          <Image src={user.url} alt={`${user.name}'s avatar`} />
          <Name>{user.name}</Name>
          <Role>{user.job_role}</Role>
        </div>
        <IconButton
          icon={() => <MdDelete color="#212121" size="24px" />}
          onClick={handleClickDeleteNaver}
        />
        <IconButton
          icon={() => <MdCreate color="#212121" size="24px" />}
          onClick={() => console.log('edit')}
        />
      </Container>
      <Modal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        message="test modal"
        title="modal title"
      />
      <Modal
        isOpen={deleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
      >
        <DeleteModalComponent
          closeModal={() => setDeleteModalOpen(false)}
          userId={user.id}
        />
      </Modal>
    </>
  );
};

export default Card;
