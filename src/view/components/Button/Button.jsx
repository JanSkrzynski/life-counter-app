import React from "react";
import style from "./Button.module.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

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
4. You can also give the button an 'onClick' prop with a function that you want to execute when the button is clicked.
5. You can also give the button a 'to' prop with the path you want to navigate to when the button is clicked.


EXAMPLE:
<ButtonPrimary
  buttonText="Button"
  iconName="add"
  onClick={() => {
    console.log("Button clicked");
  }}
    to={ROUTES.home}

*/

export const ButtonPrimary = ({
  buttonText = "Button",
  iconName = "add",
  onClick,
  to,
}) => {
  return (
    <Link to={to} onClick={onClick} className={style.button}>
      {buttonText}
      {iconName && <Icon name={iconName} />}
    </Link>
  );
};

export const ButtonSecondary = ({
  buttonText = "Button",
  iconName = "add",
  onClick,
  to,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${style.button} ${style.button__secondary}`}
    >
      {buttonText}
      {iconName && <Icon name={iconName} />}
    </Link>
  );
};

export const ButtonTertiary = ({
  buttonText = "Button",
  iconName = "add",
  onClick,
  to,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${style.button} ${style.button__tertiary}`}
    >
      {buttonText}
      {iconName && <Icon name={iconName} />}
    </Link>
  );
};
