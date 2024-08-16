import React from "react";
import style from "./Tag.module.css";
import Icon from "../Icon/Icon";

/*

HOW TO USE TAG COMPONENT

1. Import the Tag component in the file where you want to use it.
2. Give the tag a 'tagText' prop with the text you want to display.
3. You can also give the tag an 'iconName' prop with the name of the icon you want to display.
   The available icon names are:
    - AccountBalance
    - Add
    - AddBox
    - AddCircle
    - ArrowBack
    - ArrowForward
    - Car
    - Diversity1
    - dnd
    - Share
    - SportsSoccer
    - WineBar

    Example:
      <Tag tagText="Hello" iconName="winebar" />

*/

export const Tag = ({ iconName, tagText = "Tag" }) => {
  return (
    <div className={style.tag}>
      {iconName && <Icon name={iconName} />}
      {tagText}
    </div>
  );
};

export const TagPrimary = ({ iconName, tagText = "Tag" }) => {
  return (
    <div className={`${style.tag} ${style.tag__primary}`}>
      {iconName && <Icon name={iconName} />}
      {tagText}
    </div>
  );
};

export const TagSecondary = ({ iconName, tagText = "Tag" }) => {
  return (
    <div className={`${style.tag} ${style.tag__secondary}`}>
      {iconName && <Icon name={iconName} />}
      {tagText}
    </div>
  );
};

export const TagTertiary = ({ iconName, tagText = "Tag" }) => {
  return (
    <div className={`${style.tag} ${style.tag__tertiary}`}>
      {iconName && <Icon name={iconName} />}
      {tagText}
    </div>
  );
};
