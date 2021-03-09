import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'primary' | 'secondary';
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  variant = 'primary'
}) => {
  return (
    <Button onClick={onClick} type={type} variant={variant}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
