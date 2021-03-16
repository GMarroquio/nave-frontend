import { UserProps } from 'pages/Home';
import React, { useEffect, useState } from 'react';
import { getUser } from 'services/user';
import { differenceInYears, differenceInMonths } from 'date-fns';

import {
  Container,
  Image,
  Name,
  InfoWrapper,
  Label,
  Info,
  SecondaryInfoWrapper
} from './styles';

interface CardModalProps {
  id: string;
}

const CardModalComponent: React.FC<CardModalProps> = ({ id }) => {
  const [user, setUser] = useState({} as UserProps);

  useEffect(() => {
    (async () => {
      try {
        const response: UserProps = await getUser({ id });
        setUser(response);
      } catch (err) {
        console.log(err);
      }
    })();
    //eslint-disable-next-line
  }, []);

  const calculateAge = (date: string, type: 'birth' | 'admission') => {
    const today = new Date();
    const dateToCalculate = new Date(date);
    const years = differenceInYears(today, dateToCalculate);
    const months = differenceInMonths(today, dateToCalculate);

    if (type === 'birth') return `${years} anos`;
    else
      return `${years > 0 ? `${years} anos e ` : ''}${
        years > 0 ? months - 12 : months
      } meses`;
  };

  return (
    <Container>
      <Image src={user.url} alt={`${user.name}'s avatar image`} />
      <InfoWrapper>
        <Name>{user.name}</Name>
        <Info>{user.job_role}</Info>
        <SecondaryInfoWrapper>
          <Label>Idade</Label>
          <Info>{calculateAge(user.birthdate, 'birth')}</Info>
        </SecondaryInfoWrapper>
        <SecondaryInfoWrapper>
          <Label>Tempo de Empresa</Label>
          <Info>{calculateAge(user.admission_date, 'admission')}</Info>
        </SecondaryInfoWrapper>
        <SecondaryInfoWrapper>
          <Label>Projetos que participou</Label>
          <Info>{user.project}</Info>
        </SecondaryInfoWrapper>
      </InfoWrapper>
    </Container>
  );
};

export { CardModalComponent };
