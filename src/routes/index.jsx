import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import TermsOfService from "../pages/ToS&Privacy/TermsOfService";
import Removal from "../pages/ToS&Privacy/Removal";
import Dmca from "../pages/ToS&Privacy/Dmca";

function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dmca" element={<Dmca />} />
        <Route path="removal" element={<Removal />} />
        <Route path="tos" element={<TermsOfService />} />
        {/* 404 fallback for undefined routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
