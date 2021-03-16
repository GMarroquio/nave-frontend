import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  border?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'primary' ? '#212121' : '#fff'};
  color: ${(props) => (props.variant === 'secondary' ? '#212121' : '#fff')};
  border: ${(props) =>
    props.border
      ? props.variant === 'secondary'
        ? '1px solid #212121'
        : '1px solid #fff'
      : 'none'};
  font-weight: 600;
  font-size: 14px;
  height: 40px;
  text-transform: capitalize;
  padding: 8px 16px;
  width: 100%;
`;
