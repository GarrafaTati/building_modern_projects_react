import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos } from "./thunks";
import { removeTodo, isCompletedMark } from "./actions";
import { displayAlert } from "./thunks";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos.....</div>;
  const content = (
    <div className="wrapper wrapper--list">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

//all redux state
const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(isCompletedMark(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
