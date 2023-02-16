import styled from "styled-components";

export type ButtonType = 'plus' | 'minus';

export const ButtonStyled = styled.button<{
  renderType: ButtonType
}>`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 40px;
    color: white;
    border: 1px solid white;

    ${props => props.renderType === 'plus' && `
        background-color: #696867;

        &:hover {
          background-color: rgb(136, 29, 29);
          transition: .7s;
        }
    `}
      ${props => props.renderType === 'minus' && `
        background-color: #696867;

        &:hover {
          background-color: rgb(19, 28, 192);
          transition: .7s;
        }
    `}
`