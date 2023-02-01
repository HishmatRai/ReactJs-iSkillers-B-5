import React, { useState, useEffect } from "react";
import AboutUs from "../about-us";
import { Card } from "./../../components";
const Home = () => {
  const [color, setColor] = useState("#000");
  const [showCardComp, setShowCardComp] = useState(true);
  return (
    <div>
      <h1 style={{ color: color }}>Home Page</h1>
      {/* {showCardComp && <Card />} */}
      {/* <button onClick={() => setShowCardComp(!showCardComp)}>
        delete card component
      </button> */}
      <AboutUs color={color} cardTitle="iSkillers" />
    </div>
  );
};
export default Home;
