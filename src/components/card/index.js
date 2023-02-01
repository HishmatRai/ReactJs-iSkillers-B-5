import React from "react";
import "./index.css";
class Card extends React.Component {
  // componentWillUnmount(){
  //   alert("card component")
  // }
  render() {
    console.log("cardTitle",this.props.cardTitle)
    return (
      <div className="card-container">
        <h1>card</h1>
      </div>
    );
  }
}
export default Card;
