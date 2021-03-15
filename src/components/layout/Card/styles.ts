import styled from 'styled-components';

export const Container = styled.div`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const Image = styled.img`
  height: 280px;
  width: 280px;
  margin-bottom: 16px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Role = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;
