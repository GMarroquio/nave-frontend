import styled from 'styled-components';

export const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #212121;
  text-transform: capitalize;
`;

export const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 0;
  border: 1px solid #424242;
  padding: 8px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &::placeholder {
    color: #9e9e9e;
    text-transform: capitalize;
  }
`;
