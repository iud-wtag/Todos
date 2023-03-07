import * as actionTypes from "actions/actionTypes";
export const addTodo = (data) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      date: new Date().toLocaleDateString("de-DE"),
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
