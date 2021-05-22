import { BUTTON_SIZES } from "constants/buttonSizes";
import styled from "styled-components";
import { typography } from "styles";

export const StyledButton = styled.button`
  width: ${({ width }) => width};
  padding: 8px;
  border: 2px solid #2e30e0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ width }) => (width === BUTTON_SIZES.SMALL ? "14px" : "16px")};
  font-family: ${typography.FONT_FAMILY_SECONDARY};
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition-duration: 0.3s;
  margin-bottom: 10px;
  &:hover {
    background-color: white !important;
    color: #2e30e0;
  }
`;
