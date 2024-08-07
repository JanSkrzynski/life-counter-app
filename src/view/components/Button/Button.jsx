import React from "react";

const Button = ({ buttonText = "Button" }) => {
  return <button className={style.button}>{buttonText}</button>;
};

export default Button;
