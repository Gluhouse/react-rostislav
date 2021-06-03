import { useFormik } from "formik";
import { formikConfig } from "./data";
import { StyledLoginForm } from "./LoginFormStyles";
import { InputText, Button } from "components";

const LoginForm = ({ setFormState }) => {
  const handleSubmit = (data, formikHelpers) => {
    console.log(data);
    formikHelpers.resetForm();
    setFormState(true);
  };

  const formik = useFormik({
    ...formikConfig,
    onSubmit: handleSubmit,
  });

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
      <InputText
        label="First Name"
        name="firstName"
        onChange={formik.handleChange}
        error={formik.errors.firstName}
        value={formik.values.firstName}
        placeholder="First name"
        type="text"
      ></InputText>

      <InputText
        label="Last Name"
        name="lastName"
        onChange={formik.handleChange}
        error={formik.errors.lastName}
        value={formik.values.lastName}
        placeholder="Last name"
        type="text"
      ></InputText>

      <InputText
        label="password"
        name="password"
        onChange={formik.handleChange}
        error={formik.errors.password}
        value={formik.values.password}
        placeholder="password"
        type="password"
        maxLength={8}
      ></InputText>
      <Button name="submit" text="Submit" type="submit" size="200px"></Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
