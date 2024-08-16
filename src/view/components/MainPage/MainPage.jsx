import React from "react";
import style from "./MainPage.module.css";
import Icon from "../Icon/Icon";
import Activity from "../Activity/Activity";
import FilterAndSearch from "../FilterAndSearch/FilterAndSearch";

const MainPage = () => {
  return (
    <main className={style.main}>
      <div className={style.main__header}>
        <h1>Lorem ipsum dolor sit</h1>
        <Icon name="addbox" />
      </div>

      <h3>Nunc eget purus at erat congue convallis quis</h3>
      <div className={style.main__activities}>
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>

      <FilterAndSearch />
    </main>
  );
};

export default MainPage;
