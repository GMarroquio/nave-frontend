import styled from 'styled-components';

export const Container = styled.div`
  max-width: calc(1280px - 64px);
  margin: 0 auto;
  padding: 40px 0px;

  @media (max-width: 1280px) {
    max-width: unset;
    padding: 40px 32px;
  }

  @media (max-width: 425px) {
    padding: 8px;
    margin: unset;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  justify-content: start;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 425px) {
    display: block;
  }
`;
