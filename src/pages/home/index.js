import React, { useState, useEffect } from "react";
import { Button, Card } from "./../../components";
import { useNavigate } from "react-router-dom";
import firebase from "../../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { CommentBankSharp } from "@mui/icons-material";
const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [typeError, setTypeError] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       console.log("user login true");
  //     } else {
  //       // User is signed out
  //       console.log("user login false");
  //     }
  //   });
  // }, []);
  //
  const SingUp = () => {
    const UserData = {
      email: email,
      password: password,
      edit: false,
    };
    allUsers.push(UserData);
    setEmail("");
    setPassword("");
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((res) => {
    //     setMessage("Signed in ");
    //     setTypeError("success");
    //     console.log(res.user);
    //   })
    //   .catch((err) => {
    //     setMessage(err.message);
    //     console.log(err.message);
    //     setTypeError("error");
    //   });
    console.log("allUsers", allUsers);
  };

  const EditFunction = (i) => {
    console.log("edit", i);
    allUsers[i].edit = true;
    setAllUsers([...allUsers]);
    console.log("allUsers", allUsers);
    setEditEmail(allUsers[i].email);
    setEditPassword(allUsers[i].password);
  };
  const UpdateData = (i) => {
    console.log("UpdateData", i);
    allUsers[i].email = editEmail;
    allUsers[i].password = editPassword;
    allUsers[i].edit = false;
    setAllUsers([...allUsers]);
  };
  const DeleteFunction = (i) => {
    console.log("delete ", i);
    // i,1
  };
  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={SingUp}>Sign Up</button>
      <p style={{ color: typeError === "error" ? "red" : "green" }}>
        {message}
      </p>

      {allUsers
        .map((v, i) => {
          return (
            <div style={{ border: "2px solid red" }} key={i}>
              {v.edit ? (
                <>
                  <input
                    type="email"
                    placeholder="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="text"
                    value={editPassword}
                    onChange={(e) => setEditPassword(e.target.value)}
                  />
                  <button onClick={() => UpdateData(i)}>Update</button>
                </>
              ) : (
                <>
                  <p>{v.email}</p>
                  <p>{v.password}</p>
                  <button onClick={() => EditFunction(i)}>edit</button>
                  <button onClick={() => DeleteFunction(i)}>delete</button>
                </>
              )}
            </div>
          );
        })
        .reverse()}
      {/* <button onClick={() => SingUp("login")}>Login</button> */}
    </div>
  );
};
export default Home;
