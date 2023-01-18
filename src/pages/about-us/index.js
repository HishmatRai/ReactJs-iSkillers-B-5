import React from "react";
import { Button, Card } from "./../../components";
// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//     </div>
//   );
// };
// export default AboutUs;
class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: "About Page",
    };
  }
  render() {
    // let {heading} = this.state
    return (
      <div>
        <h1>{this.state.heading === "" ? "About Page" : this.state.heading}</h1>
        <input
          type="text"
          value={this.state.heading}
          onChange={(e) => this.setState({ heading: e.target.value })}
        />
        <Button
          title="Update"
          onClick={() => this.setState({ heading: "123" })}
        />
      </div>
    );
  }
}
export default AboutUs;
