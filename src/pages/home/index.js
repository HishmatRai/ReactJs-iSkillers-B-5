import React, { useState } from "react";
import { Button, Card } from "./../../components";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  let [heading, setHeading] = useState("Home Page");
  let [list, setList] = useState([]);
  // push data
  var newList = [];
  const pushHandler = () => {
    let userData = {
      name: "testing 1",
      email: "testing@gmail.com",
      uid: "546erw5rewr52er",
    };
    newList.push(userData);
    setList([...list, ...newList]);
    // setList([...list]);
  };
  console.log("list >>>>>>>>>>> ,", list);
  console.log("list >>>>>>>>>>> ,", list.length);
  return (
    <div>
      <h1>{heading === "" ? "Home Page" : heading}</h1>
      <input
        type="text"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />
      <Button title="About" onClick={() => navigate("/about-us")} />
      <Button title="Update" onClick={() => setHeading("123")} />
      <Button title="Push" onClick={pushHandler} />
      {list.map((v, i) => {
        return (
          <div key={i} style={{ border: "2px solid red", marginTop: "10px" }}>
            <h1>{v.name}</h1>
            <p>{v.email}</p>
            <p>{v.uid}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
