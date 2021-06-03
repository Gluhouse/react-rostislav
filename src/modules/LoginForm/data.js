import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(1, "Minimum 1 letter")
    .max(20, "Maximum 20 letters")
    .matches(/^[A-Za-z ]+$/, "Only letters")
    .required("This field is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Minimum 2 letters")
    .max(32, "Maximum 20 letters")
    .matches(/^[A-Za-z ]+$/, "Only letters")
    .required("This field is required"),
  password: Yup.string()
    .length(8, "Must contain 8 symbols")
    .matches(/^[0-9A-Za-z]+$/, "Only letters and numbers")
    .matches(
      /(?=.*(\d).*)(.*([A-Z]).*)+$/,
      "Must contain number (0-9) and capital letter (A-Z)"
    )
    .required("This field is required"),
});

export const formikConfig = {
  initialValues: {
    firstName: "",
    lastName: "",
  },
  onSubmit: () => {},
  validateOnChange: true,
  validateOnBlur: true,
  validateOnMount: false,
  validationSchema: validationSchema,
};
