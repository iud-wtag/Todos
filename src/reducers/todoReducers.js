import * as actionType from "actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      const { id, data, time } = action.payload;
      return {
        ...state,
        list: [
          {
            id: id,
            data: data,
            time: time,
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
