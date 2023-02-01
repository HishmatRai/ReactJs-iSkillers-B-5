import React from "react";
import { Button, Card, Navbar } from "./../../components";
class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "yellow",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: this.props.color }); // red
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the color was " + prevState.color;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated color is " + this.state.color;
  }
  // static getDerivedStateFromProps(props, state) {
  //   return { color: props.color };
  // }

  // shouldComponentUpdate() {
  //   return true;
  // }
  render() {
    console.log("about",this.props.cardTitle);
    return (
      <div>
        <h1 style={{ color: this.state.color }}>About Page</h1>
        <button onClick={() => this.setState({ color: "blue" })}>
          Update Color
        </button>
        <button onClick={() => this.setState({ color: "gray" })}>
          Update Color
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
        <Card cardTitle={this.props.cardTitle}/>
      </div>
    );
  }
}
export default AboutUs;
