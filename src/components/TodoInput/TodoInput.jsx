import React from "react";
import uuid from "uuid";
import styles from "./TodoInput.scss";

const TodoInput = props => {
  return (
    <input
      className={styles.todo__input}
      placeholder="Type new Todo and press enter"
      onKeyPress={e => {
        e.key === "Enter" && e.target.value.length!==0
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
