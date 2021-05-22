import { StyledRoundButton } from "./RoundButtonStyles";

function RoundButton({ color, size, Img }) {
  return (
    <StyledRoundButton size={size} backgroundColor={color}>
      {Img ? <Img /> : ""}
    </StyledRoundButton>
  );
}

export default RoundButton;
