import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler;
  type?: 'submit' | 'reset' | 'button';
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick, type }) => {
  return (
    <Button onClick={onClick} type={type}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
