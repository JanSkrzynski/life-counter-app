import React from "react";
import style from "./FilterAndSearch.module.css";
import FormField from "../FormField/FormField";
import { TagPrimary, TagSecondary, TagTertiary } from "../Tag/Tag";

const FilterAndSearch = () => {
  return (
    <footer className={style.footer}>
      <FormField label="Search" type="text" placeholder="Search" />
      <div className={style.tags}>
        <TagPrimary iconName="AccountBalance" text="Culture" />
        <TagSecondary iconName="winebar" text="Drinks" />
        <TagTertiary iconName="sportssoccer" text="sport" />
      </div>
    </footer>
  );
};

export default FilterAndSearch;
