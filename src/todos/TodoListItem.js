import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <div className="container container--todo-item">
    <h3>{todo.text}</h3>
    <div className="buttons">
      {todo.isCompleted ? null : (
        <button onClick={() => onCompletedPressed(todo.id)} className="button button--completed">
          Mark as completed
        </button>
      )}
      <button onClick={() => onRemovePressed(todo.id)} className="button button--remove">
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
