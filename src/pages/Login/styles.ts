import styled from 'styled-components';

export const Page = styled.div`
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

export const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #212121;
`;

export const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 0;
  border: 1px solid #424242;
  padding: 8px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #212121;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border: none;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;
