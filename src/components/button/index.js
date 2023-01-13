import React from "react";
const Button = (props) => {
  console.log("props", props);
  return <button onClick={props.onClick}>{props.title === "" ? "Submit" : props.title}</button>;
};
export default Button;
