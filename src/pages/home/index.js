import React, { useState } from "react";
import { Button, Navbar } from "../../components";
const Home = () => {
  let [fullName, setFullName] = useState("");
  let [message, setMessage] = useState("");
  let [messageType, setMessageType] = useState("");
  const SignUp = () => {
    if (fullName === "") {
      setMessage("full name required");
      setMessageType("error");
    } else {
      setMessage("full name", fullName);
      setMessageType("success");
    }
  };
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <input
        type="text"
        placeholder="full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <p style={{ color: messageType === "error" ? "red" : "green" }}>
        {message}
      </p>
      <Button
        title="Sign Up"
        color="red"
        buttonType={1}
        width="10%"
        onClick={SignUp}
      />
      <Button
        title="Login"
        color="green"
        buttonType={2}
        width="80%"
        onClick={() => alert("log in")}
      />
      <Button
        title="Update"
        color="blue"
        buttonType={1}
        width="100%"
        onClick={() => alert("Update")}
      />
    </div>
  );
};
export default Home;
