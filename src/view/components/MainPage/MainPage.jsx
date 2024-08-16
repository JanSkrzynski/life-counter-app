import React from "react";
import style from "./MainPage.module.css";
import Icon from "../Icon/Icon";
import Activity from "../Activity/Activity";
import FilterAndSearch from "../FilterAndSearch/FilterAndSearch";
import ROUTES from "../../../consts/Routes";
import { Link } from "react-router-dom";

const MainPage = ({ title = "Title", description = "Description" }) => {
  return (
    <main className={style.main}>
      <div className={style.main__header}>
        <h1>{title}</h1>
        <Link to={ROUTES.add}>
          <Icon className={style.add_activity} name="addbox" />
        </Link>
      </div>

      <h3>{description}</h3>
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
