import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => (
  <div className="container container--todo-item">
    <h3>{todo.text}</h3>
    <div className="buttons">
      <button className="button button--completed">Mark as completed</button>
      <button className="button button--remove">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
