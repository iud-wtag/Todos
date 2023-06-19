import { ADD_TODO } from "actions/actionTypes";
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

    default:
      return state;
  }
};
export default todoReducers;
