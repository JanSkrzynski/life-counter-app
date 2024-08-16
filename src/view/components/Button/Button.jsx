import React from "react";
import style from "./Button.module.css";
import Icon from "../Icon/Icon";

/*

HOW TO USE BUTTON COMPONENT

1. Import the Button component in the file where you want to use it.
2. Give the button a 'buttonText' prop with the text you want to display.
3. You can also give the button an 'iconName' prop with the name of the icon you want to display.
   The available icon names are:
    - AccountBalance
    - Add
    - AddBox
    - AddCircle
    - ArrowBack
    - ArrowForward
    - Car
    - Diversity1
    - dnd
    - Share
    - SportsSoccer
    - WineBar

    Example:
      <Button buttonText="Hello" iconName="winebar" />

*/

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
