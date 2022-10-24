import React from "react";

class ChildComponent extends React.Component {
  /*
   * JSX => return block
   */
  state = {
    check: false,
  };

  handleHideShow = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  render() {
    let { arrJobs } = this.props;
    let { check } = this.state;
    return (
      <>
        {check === false ? (
          <div>
            <button onClick={() => this.handleHideShow()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div>
                      {item.name} - {item.salary}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleHideShow()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
