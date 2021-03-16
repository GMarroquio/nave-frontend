import React, { useState } from 'react';
import IconButton from 'components/input/IconButton';
import { MdCreate, MdDelete } from 'react-icons/md';
import Modal from '../Modal';
import { Container, Image, Name, Role } from './styles';
import { useHistory } from 'react-router';
import { DeleteModalComponent } from 'components/layout/DeleteModalComponent';
import { CardModalComponent } from 'components/layout/CardModalComponent';
interface CardProps {
  name: string;
  image: string;
  role: string;
  id: string;
  handleDelete: () => void;
}

const Card: React.FC<CardProps> = ({ name, image, role, id, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const history = useHistory();

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
          onClick={() => history.push(`/edit/${id}`)}
        />
      </Container>
      <Modal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        padding={false}
        width={1000}
      >
        <CardModalComponent id={id} />
      </Modal>
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
