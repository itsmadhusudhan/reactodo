import React from "react";
import TodoComponent from "../TodoComponent";
import styles from "./TodoListContainer.scss";

const TodoListContainer = ({ todos, changeTodoStatus,deleteTodo }) => {
  return (
    <div className={styles.container}>
      {todos.map(todo => (
        <TodoComponent
          key={todo.id}
          todo={todo}
          changeStatus={changeTodoStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoListContainer;
