import React, { Component } from "react";

class TodoList extends Component {
  getStyle = () => {
    return {
      background: "red",
      padding: "10px",
      borderBottom: "1px red dotted",
      textDecoration: this.props.todoItems.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title, imge } = this.props.todoItems;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleted.bind(this, id)}
          />
          {title}
          <img
            src={imge}
            style={{
              border: "1px solid #ddd",
              borderRadius: "50%",
              padding: "5px",
              width: "150px"
            }}
          />
          <button
            style={tstyle}
            onClick={this.props.clickHundeler.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}
const tstyle = {
  backgtound: "black",
  color: "green",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "right"
};

export default TodoList;
