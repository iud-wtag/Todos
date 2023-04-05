import {
  ADD_TODO,
  HANDLE_CREATE,
  HANDLE_EMPTY,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  HANDLE_EDIT,
  HANDLE_CURRENT_PAGE,
} from "actions/actionTypes";
import { getDays } from "helpers/getDays";

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      task: task,
      date: new Date(),
      isTaskComplete: false,
      completeTime: null,
      isEditButtonClicked: false,
    },
  };
};

export const handleCreateButton = (isCreateButtonClicked) => {
  return {
    type: HANDLE_CREATE,
    payload: {
      isCreateButtonClicked: !isCreateButtonClicked,
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
    isEditButtonClicked: false,
  };
};

export const editTodo = (id, editedTask) => {
  return {
    type: EDIT_TODO,
    id,
    task: editedTask,
    isEditButtonClicked: false,
  };
};

export const handleEditButton = (id) => {
  return {
    type: HANDLE_EDIT,
    id,
    isEditButtonClicked: true,
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

export const handleCurrentPage = (currentPage) => {
  return {
    type: HANDLE_CURRENT_PAGE,
    currentPage,
  };
};
