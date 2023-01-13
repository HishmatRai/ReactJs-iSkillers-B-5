import React from "react";
import "./index.css";
const Card = (props) => {
  console.log("props", props);
  return (
    <div className="card-container">
      {/* <h1>{props.heading}</h1> */}
      {props.children}
    </div>
  );
};
export default Card;
