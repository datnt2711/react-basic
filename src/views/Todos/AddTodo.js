import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    if (!this.state.title) {
      alert("Missing Title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 101),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="Text Here"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button className="add" onClick={(event) => this.handleAddTodo(event)}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
