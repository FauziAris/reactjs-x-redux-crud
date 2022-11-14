import React, { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../layouts/Header";
const MainPage = lazy(() => import("../pages/main-page"));

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default function MainRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
