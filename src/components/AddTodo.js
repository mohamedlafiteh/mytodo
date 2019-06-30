import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex " }}>
          <input
            style={{ flex: " none" }}
            type="text"
            name="title"
            placeholder="Add todo"
            value={this.state.title}
            onChange={this.onChange}
          />
          <button
            type="submit"
            value="submit"
            className="btn"
            style={{ flex: "none" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
