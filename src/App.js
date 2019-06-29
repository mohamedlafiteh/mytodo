import React from "react";
import Todo from "./components/Todo";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: "Take out the trash", completed: false },
      {
        id: 2,
        title: "DInner with Lauren",
        completed: false
      },
      {
        id: 3,
        title: "Travelling to Bristol",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Todo Todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
