import React from "react";
import style from "./Image.module.css";

const Image = ({ src = "/images/logo.png", alt = "logo" }) => {
  return <img className={style.image} src={src} alt={alt}></img>;
};

export default Image;
