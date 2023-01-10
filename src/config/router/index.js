import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, NotFound } from "./../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
