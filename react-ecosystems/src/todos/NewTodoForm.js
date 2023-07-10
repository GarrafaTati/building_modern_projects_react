import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo">
      <input className="new-todo__input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your new todo here" />
      <button
        className="button button--create"
        onClick={() => {
          const isDuplicateText = todos.some((todo) => todo.text === inputValue);
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

//all redux state
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
