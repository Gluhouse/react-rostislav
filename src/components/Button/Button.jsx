import { StyledButton } from "./ButtonStyles";
import { BUTTON_SIZES } from "constants/buttonSizes";

function Button({
  color,
  onClick,
  size = BUTTON_SIZES.SMALL,
  text,
  type = "button",
}) {
  return (
    <StyledButton
      width={size}
      backgroundColor={color}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
