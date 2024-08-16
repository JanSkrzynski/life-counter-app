import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "../../../consts/Routes";
import Home from "../Home/Home";
import IconPage from "../Icon/IconPage";
import NotFound from "../NotFound/NotFound";

const Authentication = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.icon} element={<IconPage />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Authentication;
