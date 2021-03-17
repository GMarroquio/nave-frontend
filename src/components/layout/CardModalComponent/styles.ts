import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  display: flex;
  background-color: #fff;

  @media (max-width: 768px) {
    width: unset;
  }

  @media (max-width: 425px) {
    display: block;
    width: unset;
  }
`;

export const Image = styled.img`
  min-height: 503px;
  min-width: 503px;
  max-height: 503px;
  max-width: 503px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 400px;
    min-width: 400px;
    width: 100%;
  }

  @media (max-width: 425px) {
    max-width: unset;
    min-width: unset;
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 425px) {
    padding: 8px;
  }
`;

export const Infos = styled.div`
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: auto auto;
  }
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

export const CloseButtonMobile = styled.div`
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const CloseButtonDesktop = styled.div`
  display: block;
  padding: 21px;

  @media (max-width: 425px) {
    display: none;
  }
`;
