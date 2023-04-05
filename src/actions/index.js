import { ADD_TODO, HANDLE_CREATE, HANDLE_EMPTY } from "actions/actionTypes";
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

export const handleCreateBtn = (isCreateButtonClicked) => {
  return {
    type: HANDLE_CREATE,
    payload: {
      isCreateButtonClicked: !isCreateButtonClicked,
    },
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
