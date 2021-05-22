import styled from "styled-components";
import { typography } from "styles";

export const StyledToggleButton = styled.button`
  display: flex;
  align-items: center;
  width: ${({ size }) => size};
  padding: 8px;
  border: 2px solid #2e30e0;
  background-color: ${({ color }) => color};
  font-family: ${typography.FONT_FAMILY_SECONDARY};
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition-duration: 0.3s;
  text-align: center;
  & svg {
    fill: red;
    width: 20%;
  }
  & span {
    width: 80%;
  }
`;
