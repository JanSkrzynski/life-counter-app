import React from "react";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from "../../components/Button/Button";

const ButtonPage = () => {
  return (
    <div>
      <ButtonPrimary buttonText="Primary Button" iconName="add" />
      <ButtonSecondary buttonText="Secondary Button" iconName="add" />
      <ButtonTertiary buttonText="Tertriary Button" iconName="add" />
    </div>
  );
};

export default ButtonPage;
