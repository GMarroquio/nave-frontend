import React from 'react';

import { Button } from './styles';

interface IconButtonProps {
  //eslint-disable-next-line
  icon: React.FC<any>;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon />
    </Button>
  );
};

export default IconButton;
