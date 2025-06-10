import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";

function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* 404 fallback for undefined routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
