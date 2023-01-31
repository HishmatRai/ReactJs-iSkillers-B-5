import React from "react";
import { Button, Card, Navbar } from "./../../components";
class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }
  render() {
    return (
      <div>
        <h1 style={{color:this.state.color}}>About Page</h1>
      </div>
    );
  }
}
export default AboutUs;
