import React from "react";
import style from "./HomePage.module.css";
import Image from "../../components/Image/Image";
import { ButtonPrimary } from "../../components/Button/Button";

function HomePage() {
  return (
    <main className={style.home}>
      <Image />
      <h1>Lorem ipsum dolor sit</h1>
      <h3>Nunc eget purus at erat congue convallis quis</h3>
      <ButtonPrimary
        className
        buttonText="Sample CTA"
        iconName="ArrowForward"
      />
    </main>
  );
}

export default HomePage;
