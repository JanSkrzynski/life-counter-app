import React from "react";
import style from "./Tag.module.css";
import Icon from "../Icon/Icon";

const Tag = ({ iconName, tagText = "Tag" }) => {
  return (
    <div className={style.tag}>
      {iconName && <Icon name={iconName} />}
      {tagText}
    </div>
  );
};

export default Tag;
