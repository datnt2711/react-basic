import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
  //navigate to todo app
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }

  render() {
    console.log(">>>check props: ", this.props);
    return <div>Welcome to HomePage with Dat eiiiii</div>;
  }
}

export default Color(Home);
