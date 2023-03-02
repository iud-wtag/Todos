import * as actions from "./actionTypes";
export const addTodo = (data) => {
  return {
    type: actions.ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      time: new Date().toLocaleDateString("de-DE"),
    },
  };
};

export const handleCreateBtn = (isCreateBtnClicked) => {
  return {
    type: actions.HANDLE_CREATE,
    payload: {
      isCreateBtnClicked: !isCreateBtnClicked,
    },
  };
};
