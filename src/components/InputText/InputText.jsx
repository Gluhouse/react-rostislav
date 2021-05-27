import { StyledInputText } from "./InputTextStyles";

function InputText({
  autoFocus = false,
  error,
  disabled = false,
  label = "",
  maxLength = Infinity,
  name = "",
  pattern,
  placeholder,
  role = "textbox",
  success,
  type = "text",
  value = "",
  onChange,
  onKeyUp,
  onInput,
  onKeyPress,
}) {
  return (
    <StyledInputText
      autoFocus={autoFocus}
      value={value}
      pattern={pattern}
      role={role}
      type={type}
      name={name}
      label={label}
      variant="filled"
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyPress={disabled ? undefined : onKeyPress}
      onInput={onInput}
      InputLabelProps={{ shrink: true }}
      error={!!error}
      success={success}
      placeholder={placeholder || ""}
      helperText={error}
      inputProps={{
        "aria-label": label,
        maxLength,
        autoComplete: "new-password",
        form: { autocomplete: "off" },
      }}
      // inputRef={inputRef}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{}}
    />
  );
}

export default InputText;
