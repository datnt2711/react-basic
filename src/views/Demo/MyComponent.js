import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: 1, name: "Developers", salary: "500 $" },
      { id: 2, name: "Testers", salary: "300 $" },
      { id: 3, name: "Project Manager", salary: "1000 $" },
    ],
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  /*
   * JSX => return block
   */
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleButtonClick(event)}
          />
        </form>
        <ChildComponent
          name={"Component Child  "}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
