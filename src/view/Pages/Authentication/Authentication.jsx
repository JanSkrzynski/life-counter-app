import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "../../../consts/Routes";
import Home from "../Home/Home";
import IconPage from "../Icon/IconPage";
import NotFound from "../NotFound/NotFound";
import ButtonPage from "../Button/ButtonPage";
import TagPage from "../Tag/TagPage";
import FormFieldPage from "../FormField/FormFieldPage";
import ActivityPage from "../Activity/ActivityPage";

const Authentication = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.icon} element={<IconPage />} />
        <Route path={ROUTES.button} element={<ButtonPage />} />
        <Route path={ROUTES.tag} element={<TagPage />} />
        <Route path={ROUTES.formField} element={<FormFieldPage />} />
        <Route path={ROUTES.activity} element={<ActivityPage />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Authentication;
