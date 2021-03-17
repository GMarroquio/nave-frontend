import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 32px;
`;

export const Content = styled.div`
  width: 592px;
  margin: 0 auto;

  @media (max-width: 425px) {
    width: unset;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 32px;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  width: 75%;
  justify-self: end;

  @media (max-width: 425px) {
    width: 100%;
  }
`;
