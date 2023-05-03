import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  HANDLE_EDIT,
  EDIT_TODO,
} from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const {
        id,
        task,
        date,
        isTaskComplete,
        completeTime,
        isEditButtonClicked,
      } = action.payload;
      return {
        ...state,
        list: [
          {
            id,
            task,
            date,
            isTaskComplete,
            completeTime,
            isEditButtonClicked,
          },
          ...state.list,
        ],
      };
    }

    case DELETE_TODO: {
      const newList = state.list.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        list: newList,
      };
    }

    case COMPLETE_TODO: {
      const { id, completeTime, isTaskComplete } = action.payload;
      const completedTaskIndex = state.list.findIndex((task) => task.id === id);

      const completedTask = {
        ...state.list[completedTaskIndex],
        completeTime,
        isTaskComplete,
      };
      const completedList = state.list.map((todo) => ({ ...todo }));
      completedList[completedTaskIndex] = completedTask;

      return {
        ...state,
        list: completedList,
      };
    }

    case HANDLE_EDIT: {
      const { id, isEditButtonClicked } = action.payload;
      const editButtonIndex = state.list.findIndex((task) => task.id === id);

      const editButtonClicked = {
        ...state.list[editButtonIndex],
        isEditButtonClicked,
      };

      const updatedList = state.list.map((todo) => ({ ...todo }));
      updatedList[editButtonIndex] = editButtonClicked;

      return {
        ...state,
        list: updatedList,
      };
    }

    case EDIT_TODO: {
      const { id, task, isEditButtonClicked } = action.payload;
      const editTaskIndex = state.list.findIndex((task) => task.id === id);

      const editedTask = {
        ...state.list[editTaskIndex],
        task,
        isEditButtonClicked,
      };

      const editedList = state.list.map((todo) => ({ ...todo }));
      editedList[editTaskIndex] = editedTask;

      return {
        ...state,
        list: editedList,
      };
    }

    default:
      return state;
  }
};
export default todoReducers;
