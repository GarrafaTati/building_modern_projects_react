export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});

export const IS_COMPLETED_MARK = "IS_COMPLETED_MARK";
export const isCompletedMark = (text) => ({
  type: IS_COMPLETED_MARK,
  payload: { text },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
