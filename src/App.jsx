import React from "react";
import TodoInput from "./components/TodoInput";
import TodoListContainer from "./components/TodoListContainer";
import ActionBar from "./components/ActionBar";
import styles from "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      active: true,
      status: "ALL"
    };
  }

  createTodo = todo => {
    // console.log(todo);
    this.setState(prevState => {
      return { todos: [...prevState.todos, ...[todo]] };
    });
  };

  changeTodoStatus = id => {
    this.setState(prevState => ({
      todos: prevState.todos
        .map(
          todo => (todo.id === id ? { ...todo, active: !todo.active } : todo)
        )
        .sort((a, b) => {
          return b.active < a.active ? -1 : 1;
        })
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  clearCompleted = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.active !== false)
    }));
  };

  changeViewStatus = newStatus => {
    this.setState({ status: newStatus });
  };

  render() {
    const currentTodos =
      this.state.status === "ACTIVE"
        ? this.state.todos.filter(todo => todo.active !== false)
        : this.state.status === "COMPLETED"
          ? this.state.todos.filter(todo => todo.active !== true)
          : this.state.todos;
    return (
      <div className={styles.container}>
        {console.log(this.state.status)}
        <TodoInput createTodo={this.createTodo} />
        <TodoListContainer
          todos={currentTodos}
          changeTodoStatus={this.changeTodoStatus}
          deleteTodo={this.deleteTodo}
        />
        <ActionBar
          clearCompleted={this.clearCompleted}
          changeViewStatus={this.changeViewStatus}
        />
      </div>
    );
  }
}

export default App;
