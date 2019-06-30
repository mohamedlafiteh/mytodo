import React, { Component } from "react";
import TodoList from "./TodoList";
export default class Todo extends Component {
  render() {
    return this.props.Todos.map(item => {
      return (
        <TodoList
          todoItems={item}
          markCompleted={this.props.markCompleted}
          clickHundeler={this.props.clickHundeler}
        />
      );
    });
  }
}
