import styled from "styled-components";

export const StyledRoundButton = styled.button`
  width: ${({ size }) => (size ? size : "20px")};
  height: ${({ size }) => (size ? size : "20px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "green"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 10px;
  & svg {
    width: calc(${({ size }) => size} / 2);
    height: calc(${({ size }) => size} / 2);
    fill: ${({ backgroundColor }) => backgroundColor};
    filter: invert(1);
  }
`;
