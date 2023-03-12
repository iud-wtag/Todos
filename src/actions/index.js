import { ADD_TODO, HANDLE_CREATE } from "actions/actionTypes";
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      date: new Date().toLocaleDateString("de-DE"),
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
