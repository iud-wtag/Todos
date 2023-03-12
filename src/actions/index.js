import {
  ADD_TODO,
  HANDLE_CREATE,
  HANDLE_EMPTY,
  DELETE_TODO,
} from "actions/actionTypes";
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      date: new Date().toLocaleDateString("de-DE"),
      isTaskComplete: false,
      completeTime: null,
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

export const completeTodo = (id) => {
  function getDays(day1, day2) {
    return Math.ceil((day2 - day1) / (1000 * 3600 * 24));
  }
  return {
    type: actionTypes.COMPLETE_TODO,
    id,
    isTaskComplete: true,
    completeTime: getDays(id, new Date().getTime()),
  };
};
export const handleEmptyError = (isEmptyError) => {
  return {
    type: HANDLE_EMPTY,
    payload: {
      isEmptyError: !isEmptyError,
    },
  };
};
