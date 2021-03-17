import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  background: #0008;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    align-items: unset;
    justify-content: unset;
  }
`;

interface ModalProps {
  padding?: boolean;
  width?: number;
}

export const ModalInfo = styled.div<ModalProps>`
  background-color: #fff;
  padding: ${({ padding }) => (padding ? '24px' : '0')};
  width: ${({ width }) => (width ? `${width}px` : '592px')};

  @media (max-width: 768px) {
    width: 100%;
  }
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
