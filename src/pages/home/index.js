import React, { useState } from "react";
import { Button, Card } from "../../components";
const Home = () => {
  let [classType, setClassType] = useState("");
  const SubmitData = () => {
    console.log(classType);
  };

  let CardData = [
    {
      heading: "Heading",
    },
    {
      heading: "Heading",
    },
    {
      heading: "Heading",
    },
    {
      heading: "Heading",
    },
    {
      heading: "Heading",
    },
    {
      heading: "Heading",
    },
  ];
  return (
    <div>
      <Button title="Sign Up" onClick={() => alert("sing up")} />

      {/* {CardData.map((v, i) => {
        return <Card heading={`${v.heading} ${i+1}`} key={i} />;
      })} */}
      {CardData.map((v, i) => {
        return (
          <Card key={i}>
            <div>
              <h1>{v.heading}</h1>
              <p>fsdfsf</p>
              <button>fsdf</button>
              <ul>
                <li>fsdfsf</li>
              </ul>
            </div>
          </Card>
        );
      })}

      <h1>Home Page</h1>
      <button
        onClick={() => setClassType("Physical")}
        style={{ backgroundColor: classType === "Physical" ? "green" : "gray" }}
      >
        Physical
      </button>
      <button
        onClick={() => setClassType("Online")}
        style={{ backgroundColor: classType === "Online" ? "green" : "gray" }}
      >
        Online
      </button>
      {classType !== "" && <p>Apply form here for {classType} classes.</p>}

      <div>
        {classType === "Physical" && <h1>Physical</h1>}
        {classType === "Online" && <h1>Online</h1>}
      </div>
      <button onClick={SubmitData}>click </button>
    </div>
  );
};
export default Home;
