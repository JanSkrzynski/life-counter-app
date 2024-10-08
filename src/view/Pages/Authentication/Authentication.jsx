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
import Main from "../Main/Main";
import Add from "../Add/Add";
import Components from "../Components/Components";
import AddPage from "../../components/AddPage/AddPage";
import DetailPage from "../../components/DetailPage/DetailPage";

const Authentication = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.main} element={<Main />} />
        <Route path={ROUTES.add} element={<Add />} />
        <Route path={ROUTES.components.main} element={<Components />} />

        <Route path={ROUTES.components.activity} element={<ActivityPage />} />
        <Route path={ROUTES.components.addPage} element={<AddPage />} />
        <Route path={ROUTES.components.button} element={<ButtonPage />} />
        <Route path={ROUTES.components.detailPage} element={<DetailPage />} />
        <Route path={ROUTES.components.icon} element={<IconPage />} />
        <Route path={ROUTES.components.tag} element={<TagPage />} />
        <Route path={ROUTES.components.formField} element={<FormFieldPage />} />

        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Authentication;
