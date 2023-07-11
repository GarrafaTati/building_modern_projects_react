export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const IS_COMPLETED_MARK = "IS_COMPLETED_MARK";
export const isCompletedMark = (text) => ({
  type: IS_COMPLETED_MARK,
  payload: { text },
});
