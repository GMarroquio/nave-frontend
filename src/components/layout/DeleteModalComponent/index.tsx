import React from 'react';
import { Message, Title } from '../Modal/styles';
import ButtonComponent from 'components/input/Button';

import { ButtonWrapper } from './styles';

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
      <ButtonWrapper>
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
      </ButtonWrapper>
    </>
  );
};
