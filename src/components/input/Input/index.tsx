import React from 'react';

import { Wrapper, Label, Input } from './styles';

interface InputProps {
  register: () => void;
  label: string;
  name: string;
  type?: string;
  fullWidth?: boolean;
  error?: boolean;
}

const InputComponent: React.FC<InputProps> = ({
  register,
  label,
  name,
  type,
  fullWidth = false,
  error = false
}) => {
  return (
    <Wrapper fullWidth={fullWidth}>
      <Label error={error}>{label}</Label>
      <Input
        placeholder={label}
        name={name}
        ref={register}
        type={type}
        error={error}
      />
    </Wrapper>
  );
};

export default InputComponent;
