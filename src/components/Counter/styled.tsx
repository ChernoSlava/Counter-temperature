import styled from 'styled-components';
import { ThemeType } from '@theme';

export type CounterType =
  | 'zero'
  | 'lesszero'
  | 'lessten'
  | 'abovezero'
  | 'aboveten';

export const CounterStyled = styled.div<{
  type: CounterType;
}>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: ${props => (props.theme as ThemeType).colors.blue20};
  text-align: center;
  padding-top: 80px;
  font-size: 30px;
  color: ${props => (props.theme as ThemeType).colors.white};

  ${props =>
    props.type === 'zero' &&
    `
        background-color: ${(props.theme as ThemeType).colors.grey10};
        transition: linear 0.9s;
    `}
  ${props =>
    props.type === 'lesszero' &&
    `
        background-color: ${(props.theme as ThemeType).colors.blue30};
        transition: linear 0.9s;
    `}
    ${props =>
    props.type === 'lessten' &&
    `
        background-color: ${(props.theme as ThemeType).colors.blue40};
        transition: linear 0.9s;
    `}
    ${props =>
    props.type === 'abovezero' &&
    `
        background-color: ${(props.theme as ThemeType).colors.red30};
        transition: linear 0.9s;
    `}
    ${props =>
    props.type === 'aboveten' &&
    `
        background-color: ${(props.theme as ThemeType).colors.red20};
        transition: linear 0.9s;
    `}
`;
