import React from "react";
import style from "./HomePage.module.css";
import Image from "../../components/Image/Image";
import { ButtonPrimary } from "../../components/Button/Button";
import ROUTES from "../../../consts/Routes";

function HomePage({ title = "Title", desciption = "Description" }) {
  return (
    <main className={style.home}>
      <Image />
      <h1>{title}</h1>
      <h3>{desciption}</h3>
      <ButtonPrimary
        className
        buttonText="Sample CTA"
        iconName="ArrowForward"
        onClick={() => {
          console.log("Button clicked");
        }}
        to={ROUTES.main}
      />
    </main>
  );
}

export default HomePage;
