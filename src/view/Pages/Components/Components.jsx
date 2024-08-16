import React from "react";
import style from "./Components.module.css";
import ROUTES from "../../../consts/Routes";
import { Link } from "react-router-dom";

const Components = () => {
  return (
    <>
      <aside>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.activity}>Activity</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main></main>
    </>
  );
};

export default Components;
