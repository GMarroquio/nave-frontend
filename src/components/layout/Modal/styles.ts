import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  background: #0008;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ModalInfo = styled.div`
  background-color: #fff;
  padding: 24px;
  width: 592px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;
