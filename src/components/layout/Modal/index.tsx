import React, { useRef } from 'react';
import IconButton from 'components/input/IconButton';
import { MdClose } from 'react-icons/md';

import { Container, Title, Message, ModalInfo } from './styles';
import { useClickOutside } from 'hooks/useClickOutside';

interface ModalProps {
  isOpen: boolean;
  type?: 'info' | 'action';
  title: string;
  message: string;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  type,
  title,
  message,
  handleClose
}) => {
  const containerRef = useRef(null);

  useClickOutside(containerRef, isOpen, handleClose);

  return (
    <Container isOpen={isOpen}>
      <ModalInfo ref={containerRef}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
            // alignItems: 'center'
          }}
        >
          <Title>{title}</Title>
          <IconButton
            icon={() => <MdClose color="#212121" size="24px" />}
            onClick={handleClose}
          />
        </div>
        <Message>{message}</Message>
      </ModalInfo>
    </Container>
  );
};

export default Modal;
