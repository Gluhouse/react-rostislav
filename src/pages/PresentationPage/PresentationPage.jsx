import { useState } from "react";
import { Button, Text, RoundButton, ToggleButton, InputText } from "components";

import { HeaderMenuBar, LoginForm } from "modules";

import { Home, Search, Settings, StarFilled, StarHollow } from "assets";
import { BUTTON_SIZES } from "constants/buttonSizes";
import { colors } from "styles";
import { StyledPresentationPage } from "./PresentationPageStyles";

import { useFormik } from "formik";
import { formikConfig } from "./data";

const PresentationPage = () => {
  const [buttonState, setButtonState] = useState(false);
  const [toggleButtonState, setToggleButtonState] = useState(false);
  const [formState, setFormState] = useState(false);

  const handleClick = () => {
    setButtonState(!buttonState);
    console.log(buttonState);
  };

  const handleToggle = () => {
    setToggleButtonState(!toggleButtonState);
  };

  const handleSubmitForm = (data, formikHelpers) => {
    console.log(data);
    console.log(formikHelpers);
    formikHelpers.resetForm();
  };

  const formik = useFormik({ ...formikConfig, onSubmit: handleSubmitForm });

  return (
    <StyledPresentationPage>
      <HeaderMenuBar />
      <h1>Presentation Page</h1>
      <LoginForm setFormState={setFormState} />

      {formState ? <StarFilled /> : <StarHollow />}

      <form onSubmit={formik.handleSubmit}>
        <InputText
          error={formik.errors.firstName}
          value={formik.values.firstName}
          name="firstName"
          onChange={formik.handleChange}
        />
        <InputText
          error={formik.errors.lastName}
          value={formik.values.lastName}
          name="lastName"
          onChange={formik.handleChange}
        />
        <Button
          color={colors.PRIMARY}
          size={BUTTON_SIZES.BIG}
          text="Submit"
          type="submit"
        ></Button>
      </form>

      <Button
        color={colors.PRIMARY}
        size={BUTTON_SIZES.BIG}
        text={"Submit"}
        onClick={handleClick}
      ></Button>
      <Button
        color={colors.PRIMARY}
        size={BUTTON_SIZES.SMALL}
        text={"Submit"}
        onClick={handleClick}
      ></Button>
      <Text type="h1" text="Hello"></Text>
      <RoundButton color="yellow" size="40px" Img={Home} />
      <RoundButton color="white" size="60px" Img={Search} />

      <RoundButton color="purple" size="80px" Img={Settings} />

      <RoundButton />

      <Text type="h1">H1</Text>
      <Text type="h2">H2</Text>
      <Text type="h3">H3</Text>
      <Text type="h4">H4</Text>
      <Text>Default</Text>
      <Text type="desc">Desc</Text>

      <StarFilled />
      <StarHollow />
      <ToggleButton
        color="black"
        size="200px"
        text="TOGGLE ME"
        onClick={handleToggle}
      >
        {toggleButtonState ? <StarFilled /> : <StarHollow />}
      </ToggleButton>
    </StyledPresentationPage>
  );
};

export default PresentationPage;
