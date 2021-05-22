import { StyledButton } from "./ButtonStyles";
import { BUTTON_SIZES } from "constants/buttonSizes";

function Button({ color, onClick, size = BUTTON_SIZES.SMALL, text }) {
  return (
    <StyledButton width={size} backgroundColor={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
