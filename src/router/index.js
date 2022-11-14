import React, { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../layouts/Header";
const MainPage = lazy(() => import("../pages/main-page"));
const DetailPage = lazy(() => import("../pages/detail-page"));
const Errorpage = lazy(() => import("../pages/error-page"));

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/detail/:jobId" element={<DetailPage />} />
        </Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
