import { StyledToggleButton } from "./ToggleButtonStyles";

const ToggleButton = ({ color, children, text, size, onClick }) => {
  return (
    <StyledToggleButton color={color} onClick={onClick} size={size}>
      {children}
      <span>{text}</span>
    </StyledToggleButton>
  );
};

export default ToggleButton;
