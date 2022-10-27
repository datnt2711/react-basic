import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    console.log(">>>check props", this.props);
    let id = this.props.match.params.id;
    let res = await axios.get(`https://reqres.in/api/users/${id}`);
    this.setState({
      user: res.data && res.data.data ? res.data.data : {},
    });
  }
  handleBackUser = () => {
    this.props.history.push("/user");
  };

  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;

    return (
      <>
        {isEmptyObj === false && (
          <>
            <div>Fetch User id : {user.id}</div>
            <div>
              Name: {user.first_name} {user.last_name}
            </div>
            <div>Email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button onClick={() => this.handleBackUser()}>Back</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
