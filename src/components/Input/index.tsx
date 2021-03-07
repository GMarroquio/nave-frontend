import React from 'react';

import { Label, Input } from './styles';

interface InputProps {
  register: () => void;
  label: string;
  name: string;
  type?: string;
}

const InputComponent: React.FC<InputProps> = ({
  register,
  label,
  name,
  type
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Input placeholder={label} name={name} ref={register} type={type} />
    </>
  );
};

export default InputComponent;
