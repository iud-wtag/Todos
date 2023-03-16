import {
  ADD_TODO,
  HANDLE_CREATE,
  HANDLE_EMPTY,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  HANDLE_EDIT,
} from "actions/actionTypes";
import { getDays } from "helpers/getDays";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      date: new Date(),
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

export const completeTodo = (id, date) => {
  return {
    type: COMPLETE_TODO,
    id,
    isTaskComplete: true,
    completeTime: getDays(date.getTime(), new Date().getTime()),
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
  };
};

export const handleEditBtn = (isEditBtnClicked) => {
  return {
    type: HANDLE_EDIT,
    payload: {
      isEditBtnClicked: !isEditBtnClicked,
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
