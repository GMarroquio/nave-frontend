import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 60px;
  width: fit-content;
  margin: 0 auto 40px;
`;

export const LoginFormCard = styled.div`
  margin: 0 auto;
  padding: 40px 32px;
  border: 1px solid #212121;
  width: 448px;
  display: flex;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
