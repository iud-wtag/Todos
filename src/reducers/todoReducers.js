import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO: {
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

    default:
      return state;
  }
};
export default todoReducers;
