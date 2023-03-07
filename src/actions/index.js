import * as actionTypes from "actions/actionTypes";
export const addTodo = (data) => {
  return {
    type: actionTypes.ADD_TODO,
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
    type: actionTypes.HANDLE_CREATE,
    payload: {
      isCreateBtnClicked: !isCreateBtnClicked,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
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
