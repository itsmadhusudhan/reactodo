import React from "react";
import uuid from "uuid";
import styles from "./TodoInput.scss";

const TodoInput = props => {
  return (
    <input
      className={styles.todo__input}
      placeholder="Enter a new todo"
      onKeyPress={e => {
        e.key === "Enter"
          ? props.createTodo({
              id: uuid(),
              text: e.target.value,
              active:true
            })
          : "";
        e.key === "Enter" ? (e.target.value = "") : "";
      }}
    />
  );
};

export default TodoInput;
