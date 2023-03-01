import * as actions from "../actions/actionTypes";
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      const { id, data, time } = action.payload;
      console.log(state);
      return {
        ...state,
        list: [...state.list],
        list: [
          {
            id: id,
            data: data,
            time: time,
          },
          ...state.list,
        ],
      };

    default:
      return state;
  }
};
export default todoReducers;
