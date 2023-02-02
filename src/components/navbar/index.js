import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFullName } from "./../../redux/action";
const Navbar = () => {
  const dispatch = useDispatch();
  const { themeColor, fullName,emailAddress,isDark } = useSelector((state) => state.useReducer);
  return (
    <div>
      <h1 style={{color:isDark? "white":"black"}}>
        nav bar {themeColor} {fullName}
      </h1>
      <input
        type={"text"}
        value={fullName}
        onChange={(e) => dispatch(setFullName(e.target.value))}
      />
      <p>{emailAddress}</p>
    </div>
  );
};
export default Navbar;
