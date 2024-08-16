import React, { useState } from "react";
import style from "./Activity.module.css";
import { Tag } from "../Tag/Tag";
import Icon from "../Icon/Icon";

const Activity = ({ activity = "Activity" }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className={style.card}>
      <div className={style.card__left}>
        <span className={style.count}>{count}</span> x
      </div>
      <div className={style.card__center}>
        <h3>{activity}</h3>
        <Tag iconName="add" />
      </div>
      <div className={style.card__right}>
        <Icon
          className={style.button}
          name="AddCircle"
          onClick={increaseCount}
        />
        <Icon
          className={`${style.button} ${style.button__negative}`}
          name="dnd"
          onClick={decreaseCount}
        />
      </div>
    </div>
  );
};

export default Activity;
