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
export const removeTodo = () => {
  return {
    type: actions.REMOVE_TODO,
  };
};
export const updateTodo = () => {
  return {
    type: actions.UPDATE_TODO,
  };
};
export const allList = () => {
  return {
    type: actions.ALL_LIST,
  };
};
export const completeList = () => {
  return {
    type: actions.COMPLETE_LIST,
  };
};
export const incompleteList = () => {
  return {
    type: actions.INCOMPLETE_LIST,
  };
};
