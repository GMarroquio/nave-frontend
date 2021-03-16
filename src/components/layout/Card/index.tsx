import IconButton from 'components/input/IconButton';
import React, { useState } from 'react';
import { MdCreate, MdDelete } from 'react-icons/md';
import Modal from '../Modal';
import { Container, Image, Name, Role } from './styles';
import { Message, Title } from '../Modal/styles';
import ButtonComponent from 'components/input/Button';

interface CardProps {
  name: string;
  image: string;
  role: string;
  handleDelete: () => void;
}

interface DeleteModalComponentProps {
  closeModal: () => void;
  handleDelete: () => void;
}

export const DeleteModalComponent = ({
  closeModal,
  handleDelete
}: DeleteModalComponentProps) => {
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
          onClick={handleDelete}
          style={{ width: '100%' }}
        />
      </div>
    </>
  );
};

const Card: React.FC<CardProps> = ({ name, image, role, handleDelete }) => {
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
          <Image src={image} alt={`${name}'s avatar`} />
          <Name>{name}</Name>
          <Role>{role}</Role>
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
          handleDelete={handleDelete}
        />
      </Modal>
    </>
  );
};

export default Card;
