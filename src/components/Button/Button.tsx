import React from 'react';
import { ButtonStyled, ButtonType } from './styled';

export type ButtonProps = {
  title?: string;
  type: ButtonType;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  onClick,
}): JSX.Element => {
  return (
    <ButtonStyled renderType={type} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
};
