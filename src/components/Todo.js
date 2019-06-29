import React, { Component } from "react";
//import TodoList from "./components/TodoList";
class Todo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.Todos.id}</h1>
      </div>
    );
  }
}

export default Todo;
