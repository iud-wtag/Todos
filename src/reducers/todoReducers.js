import { ADD_TODO, DELETE_TODO } from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, task, date } = action.payload;
      return {
        ...state,
        list: [
          {
            id,
            task,
            date,
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

    default:
      return state;
  }
};
export default todoReducers;
