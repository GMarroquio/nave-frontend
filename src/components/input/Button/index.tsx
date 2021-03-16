import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
  border?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  variant = 'primary',
  border = false,
  style = {}
}) => {
  return (
    <div style={style}>
      <Button onClick={onClick} type={type} variant={variant} border={border}>
        {label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
