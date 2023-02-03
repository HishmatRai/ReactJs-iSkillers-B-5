import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../../components";
import { setEmailAddress } from "./../../redux/action";
const Contact = () => {
  const dispatch = useDispatch();
  const { themeColor, fullName, emailAddress, isDark } = useSelector(
    (state) => state.useReducer
  );
  return (
    <div>
      <h1 style={{color:isDark? "white":"black"}}>
        Contact Page {themeColor} {fullName}
      </h1>
      {/* <p>{emailAddress}</p> */}
      {/* <input
        type={"email"}
        value={emailAddress}
        onChange={(e) => dispatch(setEmailAddress(e.target.value))}
      /> */}
      <Navbar />
    </div>
  );
};
export default Contact;
