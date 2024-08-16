import React from "react";
import style from "./DetailPage.module.css";
import Icon from "../Icon/Icon";
import { TagPrimary, TagSecondary, TagTertiary } from "../Tag/Tag";
import { ButtonPrimary } from "../Button/Button";

const DetailPage = () => {
  return (
    <main>
      <Icon name="arrowback" />
      <h1>Lorem ipsum dolor sit</h1>
      <h3>Nunc eget purus at erat congue convallis quis</h3>

      <div className={style.tags}>
        <TagPrimary iconName="add" />
        <TagSecondary iconName="add" />
        <TagTertiary iconName="add" />
      </div>

      <ButtonPrimary buttonText="Add" />
    </main>
  );
};

export default DetailPage;
