import * as actionType from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      const { id, data, date, isTaskComplete, completeTime } = action.payload;
      return {
        ...state,
        list: [
          {
            id: id,
            data: data,
            date: date,
            isTaskComplete: isTaskComplete,
            completeTime: completeTime,
          },
          ...state.list,
        ],
      };

    case actionType.DELETE_TODO:
      const newList = state.list.filter((e) => e.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case actionType.COMPLETE_TODO:
      const completedTaskIndex = state.list.findIndex(
        (e) => e.id === action.id
      );
      state.list[completedTaskIndex].completeTime = action.completeTime;
      state.list[completedTaskIndex].isTaskComplete = action.isTaskComplete;
      return {
        ...state,
        list: [...state.list],
      };

    default:
      return state;
  }
};
export default todoReducers;
