export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};
export const updateTodo = () => {
  return {
    type: "UPDATE_TODO",
  };
};
export const allList = () => {
  return {
    type: "ALL_LIST",
  };
};
export const completeList = () => {
  return {
    type: "COMPLETE_LIST",
  };
};
export const incompleteList = () => {
  return {
    type: "INCOMPLETE_LIST",
  };
};
