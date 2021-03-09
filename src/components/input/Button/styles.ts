import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'primary' ? '#212121' : '#fff'};
  color: ${(props) => (props.variant === 'secondary' ? '#212121' : '#fff')};
  font-weight: 600;
  font-size: 14px;
  border: none;
  height: 40px;
  text-transform: capitalize;
`;
