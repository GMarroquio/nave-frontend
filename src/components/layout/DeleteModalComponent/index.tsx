import React from 'react';
import { Message, Title } from '../Modal/styles';
import ButtonComponent from 'components/input/Button';

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
