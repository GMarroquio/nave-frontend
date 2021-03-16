import styled from 'styled-components';

interface WrapperProps {
  fullWidth: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'unset')};

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

interface LabelProps {
  error?: boolean;
}

export const Label = styled.p<LabelProps>`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({ error }) => (error ? '#ED4337' : '#212121')};
  text-transform: capitalize;
`;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  height: 40px;
  border: none;
  border-radius: 0;
  border: ${({ error }) => (error ? '1px solid #ED4337' : '1px solid #424242')};
  padding: 8px;
  width: 100%;

  &::placeholder {
    color: #9e9e9e;
    text-transform: capitalize;
  }
`;
