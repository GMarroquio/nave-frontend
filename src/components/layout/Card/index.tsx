import IconButton from 'components/input/IconButton';
import React, { useState } from 'react';
import { MdCreate, MdDelete } from 'react-icons/md';
import Modal from '../Modal';

import { Container, Image, Name, Role } from './styles';

interface CardProps {
  name: string;
  role: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ name, role, img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container>
        <div onClick={handleOpenModal}>
          <Image src={img} alt={`${name}'s avatar`} />
          <Name>{name}</Name>
          <Role>{role}</Role>
        </div>
        <IconButton
          icon={() => <MdDelete color="#212121" size="24px" />}
          onClick={() => console.log('deleted')}
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
    </>
  );
};

export default Card;
