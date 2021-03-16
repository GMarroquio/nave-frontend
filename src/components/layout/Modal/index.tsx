import React, { useRef } from 'react';
import IconButton from 'components/input/IconButton';
import { MdClose } from 'react-icons/md';

import { Container, Title, Message, ModalInfo } from './styles';
import { useClickOutside } from 'hooks/useClickOutside';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  message,
  handleClose,
  children
}) => {
  const containerRef = useRef(null);

  useClickOutside(containerRef, isOpen, handleClose);

  return (
    <Container isOpen={isOpen}>
      <ModalInfo ref={containerRef}>
        {children ? (
          <>{children}</>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Title>{title}</Title>
              <IconButton
                icon={() => <MdClose color="#212121" size="24px" />}
                onClick={handleClose}
              />
            </div>
            <Message>{message}</Message>
          </>
        )}
      </ModalInfo>
    </Container>
  );
};

export default Modal;
