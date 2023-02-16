import styled from 'styled-components';

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
  background-color: rgb(72, 133, 218);
  text-align: center;
  padding-top: 80px;
  font-size: 30px;
  color: white;

  ${props =>
    props.type === 'zero' &&
    `
        background-color: #696867;
        transition: linear 0.9s;
    `}
  ${props =>
    props.type === 'lesszero' &&
    `
        background-color: rgb(98, 138, 196);
        transition: linear 0.9s;
    `}
    ${props =>
    props.type === 'lessten' &&
    `
        background-color: rgb(0, 69, 166);
        transition: linear 0.9s;
    `}
    ${props =>
    props.type === 'abovezero' &&
    `
        background-color: rgb(215, 104, 84);
        transition: linear 0.9s;
    `}
    ${props =>
    props.type === 'aboveten' &&
    `
        background-color: rgb(252, 38, 0);
        transition: linear 0.9s;
    `}
`;
