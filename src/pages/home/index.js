import React, { useState, useEffect } from "react";
import AboutUs from "../about-us";
import Contact from "../contact";
import { useSelector, useDispatch } from "react-redux";
import {
  setThemeColor,
  setIsDark,
  setTodoList,
  setTodoValue,
} from "./../../redux/action";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Home = () => {
  const dispatch = useDispatch();
  const { themeColor, fullName, emailAddress, isDark, todoList, todoValue } =
    useSelector((state) => state.useReducer);
  let getData = JSON.parse(localStorage.getItem("isDark"));
  let getTodoData = JSON.parse(localStorage.getItem("todoData"));
  console.log("getTodoData", getTodoData);
  useEffect(() => {
    if (getTodoData !== null) {
      dispatch(setTodoList(getTodoData));
    }
    if (getData === null) {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    } else {
      // true false
      if (getData) {
        dispatch(setIsDark(true));
      } else {
        dispatch(setIsDark(false));
      }
    }
  }, []);
  // get
  // JSON.parse()
  // add
  // JSON.stringify()

  const changeTheme = () => {
    dispatch(setIsDark(!isDark));
    // local storate
    localStorage.setItem("isDark", JSON.stringify(!isDark));
  };

  // add todo

  const addTodo = () => {
    todoList.push(todoValue);
    localStorage.setItem("todoData", JSON.stringify(todoList));
    dispatch(setTodoValue(""));
  };
  return (
    <div
      style={{ backgroundColor: isDark ? "black" : "gray", height: "100vh " }}
    >
      <button
        style={{
          backgroundColor: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
        }}
        onClick={changeTheme}
      >
        update theme
      </button>
      <h1 style={{ color: isDark ? "white" : "black" }}>
        Home Page {themeColor} {fullName}
      </h1>
      {/* <p>{emailAddress}</p> */}
      <Contact />
      {/* {showCardComp && <Card />} */}
      {/* <button onClick={() => setShowCardComp(!showCardComp)}>
        delete card component
      </button> */}
      {/* <AboutUs color={color} cardTitle="iSkillers" /> */}
      <input
        type={"text"}
        value={todoValue}
        onChange={(e) => dispatch(setTodoValue(e.target.value))}
      />
      <button onClick={addTodo}>add</button>
      {todoList.length === 0 ? (
        <h1 style={{ color: isDark ? "white" : "black" }}>
          data not available
        </h1>
      ) : (
        todoList.map((v, i) => {
          return (
            <div key={i}>
              <p style={{ color: isDark ? "white" : "black" }}>{v}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Home;
