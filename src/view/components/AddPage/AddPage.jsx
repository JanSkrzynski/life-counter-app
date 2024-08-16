import React from "react";
import style from "./AddPage.module.css";
import FormField from "../FormField/FormField";
import { TagPrimary, TagSecondary, TagTertiary } from "../Tag/Tag";
import { ButtonPrimary } from "../Button/Button";

const AddPage = ({ title = "Title", label, inputName, tagText }) => {
  return (
    <main className={style.add}>
      <div>
        <h1>{title}</h1>
        <FormField label={label} name={inputName} />
        <h4>{tagText}</h4>
      </div>
      <div className={style.tags}>
        <TagPrimary iconName="add" />
        <TagSecondary iconName="add" />
        <TagTertiary iconName="add" />
      </div>

      <ButtonPrimary className={style.add__button} buttonText="Add" />
    </main>
  );
};

export default AddPage;
