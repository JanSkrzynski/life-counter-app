import React from "react";
import style from "./Button.module.css";
import Icon from "../Icon/Icon";

export const ButtonPrimary = ({ buttonText = "Button", iconName = "add" }) => {
  return (
    <button className={style.button}>
      {buttonText}
      {iconName && <Icon name={iconName} />}
    </button>
  );
};

export const ButtonSecondary = ({
  buttonText = "Button",
  iconName = "add",
}) => {
  return (
    <button className={`${style.button} ${style.button__secondary}`}>
      {buttonText}
      {iconName && <Icon name={iconName} />}
    </button>
  );
};

export const ButtonTertiary = ({ buttonText = "Button", iconName = "add" }) => {
  return (
    <button className={`${style.button} ${style.button__tertiary}`}>
      {buttonText}
      {iconName && <Icon name={iconName} />}
    </button>
  );
};
