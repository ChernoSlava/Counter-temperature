import styled from 'styled-components';
import { ThemeType } from '@theme';

export type ButtonType = 'plus' | 'minus';

export const ButtonStyled = styled.button<{
  renderType: ButtonType;
}>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 40px;
  color: ${props => (props.theme as ThemeType).colors.white};
  border: 1px solid white;

  ${props =>
    props.renderType === 'plus' &&
    `
        background-color: ${(props.theme as ThemeType).colors.grey10};

        &:hover {
          background-color: ${(props.theme as ThemeType).colors.red10};
          transition: .7s;
        }
    `}
  ${props =>
    props.renderType === 'minus' &&
    `
        background-color: ${(props.theme as ThemeType).colors.grey10};

        &:hover {
          background-color: ${(props.theme as ThemeType).colors.blue10};
          transition: .7s;
        }
    `}
`;
