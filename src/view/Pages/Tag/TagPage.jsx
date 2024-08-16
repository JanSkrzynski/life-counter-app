import React from "react";
import {
  Tag,
  TagPrimary,
  TagSecondary,
  TagTertiary,
} from "../../components/Tag/Tag";

const TagPage = () => {
  return (
    <div>
      <Tag tagText="Tag" iconName="winebar" />
      <TagPrimary tagText="Primary Tag" iconName="winebar" />
      <TagSecondary tagText="Secondary Tag" iconName="winebar" />
      <TagTertiary tagText="Tertiary Tag" iconName="winebar" />
    </div>
  );
};

export default TagPage;
