import React from "react";
import style from "./Button.module.css";

export const ButtonPrimary = ({ buttonText = "Button" }) => {
  return <button className={style.button}>{buttonText}</button>;
};

export const ButtonSecondary = ({ buttonText = "Button" }) => {
  return (
    <button className={`${style.button} ${style.button__secondary}`}>
      {buttonText}
    </button>
  );
};

export const ButtonTertiary = ({ buttonText = "Button" }) => {
  return (
    <button className={`${style.button} ${style.button__tertiary}`}>
      {buttonText}
    </button>
  );
};
