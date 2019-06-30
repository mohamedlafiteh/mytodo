import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        imge:
          "https://images.pexels.com/photos/2494701/pexels-photo-2494701.jpeg",
        title: "morning kiss to Lauren",
        completed: false
      },
      {
        id: 2,
        imge:
          "https://images.pexels.com/photos/1559051/pexels-photo-1559051.jpeg",
        title: "DInner with Lauren",
        completed: false
      },
      {
        id: 3,
        imge:
          "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
        title: "Travelling to Bristol",
        completed: false
      },
      {
        id: 4,
        imge:
          "https://images.pexels.com/photos/1028433/pexels-photo-1028433.jpeg",
        title: "Ordering pizza for dinner",
        completed: false
      }
    ]
  };
  markCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  clickHundeler = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  addTodo = title => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    return (
      <div>
        <Header />
        <AddTodo AddTodo={this.addTodo} />
        <Todo
          Todos={this.state.todos}
          markCompleted={this.markCompleted}
          clickHundeler={this.clickHundeler}
        />
      </div>
    );
  }
}

export default App;
