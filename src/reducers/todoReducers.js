import { ADD_TODO } from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data, date } = action.payload;
      return {
        ...state,
        list: [
          {
            id: id,
            data: data,
            date: date,
          },
          ...state.list,
        ],
      };

    default:
      return state;
  }
};
export default todoReducers;
