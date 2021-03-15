import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
