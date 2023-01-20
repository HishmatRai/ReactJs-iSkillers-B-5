import React, { useState, useEffect } from "react";
import { Button, Card } from "./../../components";
import { useNavigate, useSearchParams } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setTimeout(() => {
          setLoader(false);
        }, 2000);
      });
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      {loader ? (
        <h1>Loading ...</h1>
      ) : (
        users.map((v, i) => {
          return (
            <div key={i} style={{border:"2px solid red"}}>
              <h1>{v.name}</h1>
              <h1>{v.username}</h1>
              <h1>{v.email}</h1>
              <h1>{v.phone}</h1>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Home;
