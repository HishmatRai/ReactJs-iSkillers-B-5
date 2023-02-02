import React, { useState, useEffect } from "react";
import AboutUs from "../about-us";
import Contact from "../contact";
import { useSelector, useDispatch } from "react-redux";
import { setThemeColor, setIsDark } from "./../../redux/action";
const Home = () => {
  const dispatch = useDispatch();
  const { themeColor, fullName, emailAddress, isDark } = useSelector(
    (state) => state.useReducer
  );
  console.log("isDark", isDark);
  return (
    <div
      style={{ backgroundColor: isDark ? "black" : "gray", height: "100vh " }}
    >
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Home Page {themeColor} {fullName}
      </h1>
      <p>{emailAddress}</p>
      <button
        style={{
          backgroundColor: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
        }}
        onClick={() => dispatch(setIsDark(!isDark))}
      >
        update theme
      </button>
      <Contact />
      {/* {showCardComp && <Card />} */}
      {/* <button onClick={() => setShowCardComp(!showCardComp)}>
        delete card component
      </button> */}
      {/* <AboutUs color={color} cardTitle="iSkillers" /> */}
    </div>
  );
};
export default Home;
