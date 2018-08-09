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

  //function that creates new todo item
  createTodo = todo => {
    // console.log(todo);
    this.setState(prevState => {
      return { todos: [...prevState.todos, ...[todo]] };
    });
  };

  //function that changes the status of todo
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

  //function that deletes todo with its id
  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  //function that clears/deletes completed todos
  clearCompleted = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.active !== false)
    }));
  };

  //function that changes the view 
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
          status={this.state.status}
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
