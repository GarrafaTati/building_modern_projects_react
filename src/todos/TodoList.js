import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { getTodosLoading, getIncompleteTodos, getCompleteTodos } from "./selectors";
import { loadTodos, removeTodoRequest, isCompletedMarkTodoRequest } from "./thunks";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({ completedTodos, incompletedTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos.....</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete: </h3>
      {incompletedTodos.map((todo) => (
        <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />
      ))}
    </ListWrapper>
  );

  return isLoading ? loadingMessage : content;
};

//all redux state
const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompleteTodos(state),
  incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(isCompletedMarkTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
