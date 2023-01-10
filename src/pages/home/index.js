import React from "react";
import { Link,useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about-us">About Us</Link>
      <button onClick={() => navigate("/about-us")}>
        About Us
      </button>
    </div>
  );
};
export default Home;
