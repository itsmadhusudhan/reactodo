import React from "react";
import PropTypes from "prop-types";
import styles from "./TodoComponent.scss";

const TodoComponent = ({ todo, changeStatus, deleteTodo }) => {
  return (
    <label className={styles.todo__item}>
      <input
        type="checkbox"
        className={styles.todo__checkbox}
        onClick={() => {
          changeStatus(todo.id);
        }}
      />
      <span  className={todo.active?styles.checkmark:`${styles.checkmark} ${styles.checked}`} />
      <span className={todo.active?styles.todo:`${styles.todo} ${styles.linethrough}`}>{todo.text}</span>
      <button
        className={styles.delete__btn}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </label>
  );
};

export default TodoComponent;

TodoComponent.propTypes = {
  todo: PropTypes.object,
  changeStatus: PropTypes.func,
  deleteTodo: PropTypes.func
};
