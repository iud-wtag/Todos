import * as actionType from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
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

    case actionType.DELETE_TODO:
      const newList = state.list.filter((e) => e.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};
export default todoReducers;
