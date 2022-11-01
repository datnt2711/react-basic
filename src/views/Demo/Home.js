import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo.jpg";
import "./Home.scss";
import { connect } from "react-redux";

class Home extends React.Component {
  //navigate to todo app
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.createUseRedux();
  };

  render() {
    console.log(">>>check props: ", this.props);
    let { dataRedux } = this.props;
    return (
      <>
        <div>Welcome to HomePage with Dat eiiiii</div>
        <div className="image-logo">
          <img src={logo} alt="" />
        </div>

        <div>
          {dataRedux &&
            dataRedux.length > 0 &&
            dataRedux.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}&nbsp;&nbsp;&nbsp;{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (deleteUser) =>
      dispatch({ type: "DELETE_USER", payload: deleteUser }),
    createUseRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
