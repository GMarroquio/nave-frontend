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
  Infos,
  SecondaryInfoWrapper,
  CloseButtonMobile,
  CloseButtonDesktop
} from './styles';
import IconButton from 'components/input/IconButton';
import { MdClose, MdCreate, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router';
import Button from 'components/input/Button';

interface CardModalProps {
  id: string;
  handleDelete: () => void;
  closeModal: () => void;
}

const CardModalComponent: React.FC<CardModalProps> = ({
  id,
  handleDelete,
  closeModal
}) => {
  const [user, setUser] = useState({} as UserProps);
  const history = useHistory();

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
    <>
      <Container>
        <Image src={user.url} alt={`${user.name}'s avatar image`} />
        <InfoWrapper>
          <Infos>
            <SecondaryInfoWrapper>
              <Name>{user.name}</Name>
              <Info>{user.job_role}</Info>
            </SecondaryInfoWrapper>
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
          </Infos>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <IconButton
                icon={() => <MdDelete color="#212121" size="24px" />}
                onClick={handleDelete}
              />
              <IconButton
                icon={() => <MdCreate color="#212121" size="24px" />}
                onClick={() => history.push(`/edit/${id}`)}
              />
            </div>
            <CloseButtonMobile>
              <Button label="fechar" onClick={closeModal} />
            </CloseButtonMobile>
          </div>
        </InfoWrapper>
        <CloseButtonDesktop>
          <IconButton
            icon={() => <MdClose size={24} color="#212121" />}
            onClick={closeModal}
          />
        </CloseButtonDesktop>
      </Container>
    </>
  );
};

export { CardModalComponent };
