import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  display: flex;
`;

export const Image = styled.img`
  min-height: 503px;
  min-width: 503px;
  max-height: 503px;
  max-width: 503px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  padding: 32px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SecondaryInfoWrapper = styled.div``;

export const Label = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;
