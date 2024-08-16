import React from "react";

const Image = ({ src = "/images/logo.png", alt = "logo" }) => {
  return <img src={src} alt={alt}></img>;
};

export default Image;
