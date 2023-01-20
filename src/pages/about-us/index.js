import React from "react";
import { Button, Card ,Navbar} from "./../../components";
import { AiFillAudio } from "react-icons/ai";
import { IoAccessibilitySharp } from "react-icons/io5";

class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      message: "",
      loader: true,
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ users: json });
        setTimeout(() => {
          this.setState({ loader: false });
        }, 2000);
      });
  }
  submitData = () => {
    this.setState({ loader: true });
    if (this.state.fullName === "") {
      this.setState({ message: "Full name required!" });
      setTimeout(() => {
        this.setState({ loader: false });
      }, 1000);
    } else {
      const userData = {
        fullName: this.state.fullName,
        email: this.state.email,
      };
      console.log("userData", userData);
    }
  };
  render() {
    // let { fullName, email } = this.state;
    return (
      <div>
        <h1>About Page</h1>
        <Navbar />
        <AiFillAudio color="green" size={150}/>
        <IoAccessibilitySharp color="green" size={150}/>
        <input
          type="text"
          placeholder="full name"
          value={this.state.fullName}
          onChange={(e) => this.setState({ fullName: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <p>{this.state.message}</p>
        <button onClick={this.submitData}>
          {this.state.loader ? "Loading ..." : "submit"}
        </button>

        {this.state.loader ? (
          <h1>Loading ...</h1>
        ) : (
          this.state.users.map((v, i) => {
            return (
              <div key={i} style={{ border: "2px solid red" }}>
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
  }
}
export default AboutUs;
