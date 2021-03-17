import styled from 'styled-components';

export const Container = styled.div``;

export const Image = styled.img`
  min-height: 280px;
  min-width: 280px;
  max-height: 280px;
  max-width: 280px;
  margin-bottom: 16px;
  object-fit: cover;

  @media (max-width: 425px) {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
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
