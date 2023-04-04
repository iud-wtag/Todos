import {
  ADD_TODO,
  HANDLE_CREATE,
  HANDLE_EMPTY,
  DELETE_TODO,
} from "actions/actionTypes";
export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      task: task,
      date: new Date(),
    },
  };
};

export const handleCreateBtn = (isCreateBtnClicked) => {
  return {
    type: HANDLE_CREATE,
    payload: {
      isCreateBtnClicked: !isCreateBtnClicked,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
export const handleEmptyError = (isEmptyError) => {
  return {
    type: HANDLE_EMPTY,
    payload: {
      isEmptyError: isEmptyError,
    },
  };
};
