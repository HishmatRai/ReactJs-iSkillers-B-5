import React from "react";
const Button = (props) => {
    console.log(props)
  return (
    <button
      style={{
        color: props.color,
        backgroundColor: props.buttonType === 1 ? "green" : "red",
        width: props.width,
        borderWidth: props.buttonType === 1 ? "0px" : "2px",
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
export default Button;
