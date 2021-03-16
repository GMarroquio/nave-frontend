import React from 'react';

import { Wrapper, Label, Input } from './styles';

interface InputProps {
  register: () => void;
  label: string;
  name: string;
  type?: string;
  fullWidth?: boolean;
}

const InputComponent: React.FC<InputProps> = ({
  register,
  label,
  name,
  type,
  fullWidth = false
}) => {
  return (
    <Wrapper fullWidth={fullWidth}>
      <Label>{label}</Label>
      <Input placeholder={label} name={name} ref={register} type={type} />
    </Wrapper>
  );
};

export default InputComponent;
