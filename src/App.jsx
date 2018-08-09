import React from "react";
import uuid from 'uuid';
import TodoInput from "./components/TodoInput";
import TodoListContainer from "./components/TodoListContainer";
import ActionBar from "./components/ActionBar";
import styles from "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        id: uuid(),
        text: "Be Positive",
        active:true
      },{
        id: uuid(),
        text: "Never Giveup",
        active:true
      }],
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
        <TodoInput createTodo={this.createTodo} />
        <ActionBar
          clearCompleted={this.clearCompleted}
          changeViewStatus={this.changeViewStatus}
        />
        <TodoListContainer
          todos={currentTodos}
          changeTodoStatus={this.changeTodoStatus}
          deleteTodo={this.deleteTodo}
        />
        
      </div>
    );
  }
}

export default App;
