import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, task, date, isTaskComplete, completeTime } = action.payload;
      return {
        ...state,
        list: [
          {
            id,
            task,
            date,
            isTaskComplete,
            completeTime,
          },
          ...state.list,
        ],
      };

    case DELETE_TODO:
      const newList = state.list.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        list: newList,
      };

    case COMPLETE_TODO:
      const completedTaskIndex = state.list.findIndex(
        (task) => task.id === action.id
      );
      state.list[completedTaskIndex] = {
        ...state.list[completedTaskIndex],
        completeTime: action.completeTime,
        isTaskComplete: action.isTaskComplete,
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
