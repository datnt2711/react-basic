import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  /*
   * JSX => return block
   */
  state = {
    arrJobs: [
      { id: 1, title: "Developers", salary: "500" },
      { id: 2, title: "Testers", salary: "300" },
      { id: 3, title: "Project Manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs;
    let result = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: result,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <br />
        <ChildComponent
          title={"Component Child"}
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
