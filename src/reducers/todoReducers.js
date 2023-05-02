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
      const completedList = [...state.list];
      completedList[completedTaskIndex] = completedTask;

      return {
        ...state,
        list: completedList,
      };
    }

    case HANDLE_EDIT:
      const editButtonIndex = state.list.findIndex(
        (task) => task.id === action.id
      );
      state.list[editButtonIndex].isEditButtonClicked =
        action.isEditButtonClicked;
      return {
        ...state,
        list: [...state.list],
      };

    case EDIT_TODO:
      const editTaskIndex = state.list.findIndex(
        (task) => task.id === action.id
      );
      state.list[editTaskIndex] = {
        ...state.list[editTaskIndex],
        task: action.task,
        isEditButtonClicked: action.isEditButtonClicked,
      };
      return {
        ...state,
        list: [...state.list],
      };

    default:
      return state;
  }
};
export default todoReducers;
