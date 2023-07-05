import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo">
      <input className="new-todo__input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your new todo here" />
      <button className="button button--create">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
