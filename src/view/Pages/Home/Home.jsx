import React from "react";
import Image from "../../components/Image/Image";
import { ButtonPrimary } from "../../components/Button/Button";
function Home() {
  return (
    <>
      <Image />
      <h1>Lorem ipsum dolor sit</h1>
      <h3>Nunc eget purus at erat congue convallis quis</h3>
      <ButtonPrimary text="Sample CTA" iconName="ArrowForward" />
    </>
  );
}

export default Home;
